import {test} from 'node:test';
import assert from 'node:assert/strict';
import data from './data.js';
import {filterFeatures,partitionFeaturesByImplementation,toCSV,timelineEntries} from './model.mjs';
test('snapshot consistente y sin IDs duplicados',()=>{
 assert.ok(data.features.length>100);assert.equal(new Set(data.features.map(f=>f.id)).size,data.features.length);
 for(const f of data.features){assert.ok(f.title&&f.note&&f.category);for(const b of ['staging','main']){assert.equal(typeof f[b],'boolean');assert.equal(f[b],f.evidence[b].kind==='implementation');assert.ok(f.evidence[b].url.startsWith('https://github.com/'));assert.ok(f.evidence[b].line>0);}}
});
test('timeline incluye fecha inicial, estados y eventos trazables',()=>{
 assert.ok(Number.isFinite(Date.parse(data.timeline.startedAt)));
 assert.ok(Array.isArray(data.timeline.events));assert.ok(Array.isArray(data.timeline.baseline));
 assert.ok(data.features.every(f=>typeof f.timelineKey==='string'&&f.timelineKey.length>0));
 assert.equal(new Set(data.features.map(f=>f.timelineKey)).size,data.features.length);
 for(const f of data.features){
  for(const branch of ['staging','main']){
   const date=f.implementationDates[branch];assert.ok(date===null||Number.isFinite(Date.parse(date)));
  }
 }
 for(const event of data.timeline.events){
  assert.ok(data.features.some(f=>f.id===event.id));
  assert.ok(data.features.some(f=>f.timelineKey===event.key));
  assert.ok(['staging','main'].includes(event.branch));
  assert.ok(Number.isFinite(Date.parse(event.implementedAt)));
 }
});
test('comando de actualización ofrece ayuda sin tocar estado',async()=>{
 const {execFileSync}=await import('node:child_process');
 const root=new URL('.',import.meta.url).pathname;
 const help=execFileSync('./bin/update-rifero-status',['--help'],{cwd:root,encoding:'utf8'});
 assert.match(help,/Actualiza y publica el catálogo/);
 assert.match(help,/--dry-run/);
});
test('búsqueda sin acentos, múltiples términos y vacío',()=>{
 assert.ok(filterFeatures(data.features,{query:'verificacion CORREO'}).length>0);
 assert.equal(filterFeatures(data.features,{query:'zzzzsincoincidencia'}).length,0);
 assert.equal(filterFeatures(data.features,{query:'  '}).length,data.features.length);
});
test('filtros de estado y categoría se combinan',()=>{
 for(const status of ['both','differences','pending','staging','main']){
 const matches=filterFeatures(data.features,{status});assert.ok(matches.length>0);
 for(const f of matches)assert.ok({both:f.main&&f.staging,differences:f.main!==f.staging,pending:!f.main&&!f.staging,staging:f.staging,main:f.main}[status]);
 }
 const cat=data.features[0].category;assert.ok(filterFeatures(data.features,{category:cat,status:'both'}).every(f=>f.category===cat&&f.main&&f.staging));
});
test('el grupo común contiene sólo capacidades implementadas en ambas ramas',()=>{
 const visible=filterFeatures(data.features);
 const {implementedBoth,other}=partitionFeaturesByImplementation(visible);
 assert.ok(implementedBoth.length>0);
 assert.ok(implementedBoth.every(f=>f.staging&&f.main));
 assert.ok(other.every(f=>!(f.staging&&f.main)));
 assert.equal(implementedBoth.length+other.length,visible.length);
 const filtered=filterFeatures(data.features,{status:'both',category:data.features[0].category});
 assert.equal(partitionFeaturesByImplementation(filtered).implementedBoth.length,filtered.length);
});
test('roadmap de pagos no se marca implementado por existir una spec',()=>{
 const payments=data.features.filter(f=>f.category==='Pagos y lotería · roadmap');assert.equal(payments.length,10);assert.ok(payments.every(f=>!f.main&&!f.staging));
});
test('exportación filtrada con notas, UTF8 y escape CSV',()=>{
 const features=filterFeatures(data.features,{status:'differences'});const csv=toCSV(features);
 assert.ok(csv.startsWith('\uFEFF'));assert.equal(csv.split('\r\n').length,features.length+1);
 assert.ok(csv.startsWith('\uFEFF"ID";"Categoría";"Funcionalidad";"Staging";"Main (producción)";"Primera detección staging";"Primera detección main";'));
 assert.ok(toCSV([{...data.features[0],title:'=SUM(1)',note:'Texto "citado"; ñ'}]).includes('"\'=SUM(1)"'));
 assert.ok(toCSV([{...data.features[0],title:'X',note:'Texto "citado"'}]).includes('"Texto ""citado"""'));
});
test('fallback documental no se presenta como especificación exacta',()=>{
 const rsc=data.features.find(f=>f.title==='Verificación de exposición RSC');
 assert.equal(rsc.evidence.staging.kind,'plan');
 assert.equal(rsc.evidence.main.kind,'general-plan');
 assert.equal(rsc.evidence.main.match,null);
 const privateList=data.features.find(f=>f.title==='Lista privada de sorteos vía backend');
 assert.equal(privateList.staging,true);assert.equal(privateList.main,false);
});
test('entrada compatible con subruta de GitHub Pages',async()=>{
 const {readFile}=await import('node:fs/promises');
 const html=await readFile(new URL('./index.html',import.meta.url),'utf8');
 assert.ok(html.includes('href="./styles.css"'));
 assert.ok(html.includes('src="./app.js"'));
 assert.ok(html.includes('href="./"'));
 assert.ok(!/(?:href|src)="\//.test(html));
});
test('build sólo publica los assets permitidos',async()=>{
 const {execFileSync}=await import('node:child_process');
 const {readdir,mkdir,writeFile}=await import('node:fs/promises');
 await mkdir(new URL('./dist/',import.meta.url),{recursive:true});
 await writeFile(new URL('./dist/private-stale-file.txt',import.meta.url),'do not publish');
 execFileSync(process.execPath,[new URL('./build.mjs',import.meta.url).pathname]);
 const names=await readdir(new URL('./dist/',import.meta.url));
 assert.deepEqual(names.sort(),['.nojekyll','app.js','data.js','index.html','model.mjs','styles.css'].sort());
});

test('timeline combina hitos e implementaciones sin reescribir fechas ni baseline',()=>{
 const first={key:'login',id:'F001',branch:'staging',implementedAt:'2026-10-20T00:00:00Z'};
 const milestone={key:'a27-staging-cutover',environment:'staging',completedAt:'2026-10-19T01:43:55-03:00',evidence:[{url:'https://github.com/VictorManuel/rifero/blob/sha/docs/A27_FINAL_CUTOVER.md'}]};
 const timeline={events:[first],milestones:[milestone],baseline:[{key:'existing'}]};
 const before=JSON.stringify(timeline);const entries=timelineEntries(timeline);
 assert.equal(entries.length,2);assert.equal(entries[0].kind,'implementation');
 assert.equal(entries[1].kind,'operational-milestone');
 assert.equal(entries[1].occurredAt,milestone.completedAt);assert.equal(entries[1].environment,'staging');
 assert.deepEqual(entries[1].evidence,milestone.evidence);assert.equal(JSON.stringify(timeline),before);
 assert.deepEqual(timelineEntries(),[]);assert.equal(timelineEntries({events:[first]}).length,1);
});

test('etiquetas timeline distinguen detección y cierre operacional',async()=>{
 const {readFile}=await import('node:fs/promises');const html=await readFile(new URL('./index.html',import.meta.url),'utf8');
 assert.ok(html.includes('Timeline de avances'));assert.ok(html.includes('fecha de cierre documentada'));
});


test('timeline larga conserva lista completa en región vertical accesible',async()=>{
 const {readFile}=await import('node:fs/promises');
 const html=await readFile(new URL('./index.html',import.meta.url),'utf8');
 const css=await readFile(new URL('./styles.css',import.meta.url),'utf8');
 assert.match(html,/class="timeline-scroll" role="region" aria-label="Historial de avances con desplazamiento vertical" tabindex="0"><ol id="timeline-events"/);
 assert.match(css,/\.timeline-scroll\{[^}]*max-height:min\(34rem,65vh\)[^}]*overflow-y:auto/);
 assert.match(css,/\.timeline-scroll:focus-visible/);
 assert.ok(!css.includes('overscroll-behavior:contain'));
});
