import data from './data.js';
import {filterFeatures,toCSV} from './model.mjs';
const $=id=>document.getElementById(id);
const node=(tag,text,cls)=>{const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(cls)el.className=cls;return el;};
const date=new Intl.DateTimeFormat('es-AR',{dateStyle:'long',timeStyle:'short',timeZone:'America/Argentina/Buenos_Aires'}).format(new Date(data.generatedAt));
const timelineDate=new Intl.DateTimeFormat('es-AR',{dateStyle:'medium',timeStyle:'short',timeZone:'America/Argentina/Buenos_Aires'});
const formatTimelineDate=value=>timelineDate.format(new Date(value));
const categories=[...new Set(data.features.map(f=>f.category))];
const featureById=new Map(data.features.map(f=>[f.id,f]));
const featureByTimelineKey=new Map(data.features.map(f=>[f.timelineKey,f]));
const baselineByKey=new Map(data.timeline.baseline.filter(f=>f.key).map(f=>[f.key,f]));
function featureLink(feature){
 const link=node('a',feature.title);link.href=`#feature-${feature.id}`;
 link.addEventListener('click',()=>{$('filters').reset();render();const detail=$(`feature-${feature.id}`);if(detail)detail.open=true;});
 return link;
}
$('total').textContent=`${data.features.length} capacidades`;
$('catalog-count').textContent=data.features.length;
for(const branch of ['staging','main']){
 const n=data.features.filter(f=>f[branch]).length;
 const block=node('div',undefined,'branch-stat');const title=node('div',undefined,'stat-label');
 title.append(node('strong',branch),node('span',`${n} / ${data.features.length}`));
 // width se expresa como fracción en un elemento progress nativo, sin estilos inline.
 const progress=node('progress');progress.max=data.features.length;progress.value=n;progress.setAttribute('aria-label',`${branch}: ${n} de ${data.features.length} capacidades implementadas`);
 block.append(title,progress);$('branch-stats').append(block);
}
for(const category of categories){const option=node('option',category);option.value=category;$('category').append(option);}
$('snapshot').textContent=`Generado el ${date} (Argentina). El snapshot compara main y staging remotos de web, backend y email-worker. No se incluyen cambios locales sin publicar ni ramas sin integrar.`;
$('footer-date').textContent=`Snapshot · ${date}`;
for(const [repo,branches] of Object.entries(data.refs)){
 const li=node('li');li.append(node('strong',`${repo}: `));
 for(const [branch,sha] of Object.entries(branches)){
  const a=node('a',`${branch} ${sha.slice(0,7)}`);a.href=`https://github.com/${data.repos[repo]}/commit/${sha}`;a.target='_blank';a.rel='noopener noreferrer';li.append(a,document.createTextNode(' '));
 }$('references').append(li);
}
function renderTimeline(){
 const started=$('timeline-start');started.textContent=formatTimelineDate(data.timeline.startedAt);started.dateTime=data.timeline.startedAt;
 const events=data.timeline.events;
 $('timeline-count').textContent=`${events.length} ${events.length===1?'fecha registrada':'fechas registradas'}`;
 const empty=$('timeline-empty');empty.hidden=events.length>0;
 if(!events.length)empty.textContent='Todavía no hay cambios nuevos registrados. La próxima transición a “implementado” aparecerá aquí cuando se refresque el catálogo.';
 const list=$('timeline-events');
 for(const event of events){
  const feature=event.key?featureByTimelineKey.get(event.key):featureById.get(event.id);
  const item=node('li',undefined,'timeline-item');
  const time=node('time',formatTimelineDate(event.implementedAt),'timeline-date');time.dateTime=event.implementedAt;item.append(time);
  const title=node('h3',undefined,'timeline-event-title');
  if(feature)title.append(featureLink(feature));else title.append(node('span',event.title));
  item.append(title);
  const meta=node('div',undefined,'timeline-meta');
  const branch=node('span',event.branch==='main'?'main · producción':'staging',`timeline-branch ${event.branch}`);meta.append(branch);
  meta.append(node('span',feature?.category??event.category,'timeline-category'));item.append(meta);
  const status=feature?(feature[event.branch]?'Sigue implementada en esta rama.':'Se registró su implementación; actualmente no aparece en esta rama.'):'Esta capacidad ya no está en el catálogo actual.';
  item.append(node('p',status,'timeline-current'));
  list.append(item);
 }
 const baseline=data.timeline.baseline;
 const stagingCount=baseline.filter(feature=>feature.branches.includes('staging')).length;
 const mainCount=baseline.filter(feature=>feature.branches.includes('main')).length;
 $('timeline-baseline-summary').textContent=`Al iniciar el seguimiento, ${stagingCount} capacidades ya estaban implementadas en staging y ${mainCount} en main. No se reconstruyeron fechas anteriores.`;
 const baselineList=$('timeline-baseline-list');
 for(const feature of baseline){
  const item=node('li');const current=feature.key?featureByTimelineKey.get(feature.key):null;
  if(current)item.append(featureLink(current));else item.append(node('span',feature.title));
  const branches=node('span',feature.branches.map(branch=>branch==='main'?'main':'staging').join(' · '),'baseline-branches');item.append(branches);baselineList.append(item);
 }
}
let visible=[];
function render(){
 visible=filterFeatures(data.features,{query:$('search').value,category:$('category').value,status:$('status').value});
 const fragment=document.createDocumentFragment();
 for(const category of categories){
  const items=visible.filter(f=>f.category===category);if(!items.length)continue;
  const group=node('tr',undefined,'group-row');const groupHead=node('th');groupHead.scope='rowgroup';groupHead.colSpan=3;groupHead.append(node('span',category),node('span',`${items.length}`, 'group-count'));group.append(groupHead);fragment.append(group);
  for(const f of items){
   const row=node('tr',undefined,f.staging!==f.main?'feature-row different':'feature-row');
   const label=node('th');label.scope='row';
   const details=node('details',undefined,'feature-detail');details.id=`feature-${f.id}`;const summary=node('summary');
   summary.append(node('span',f.id,'feature-id'),node('span',f.title,'feature-title'),node('span','+','expand'));details.append(summary);
   const content=node('div',undefined,'detail-content');content.append(node('p',f.note));
   if(f.staging!==f.main)content.append(node('p','Esta capacidad tiene distinto estado entre las dos ramas.','difference-note'));
   for(const branch of ['staging','main']){
    const e=f.evidence[branch];const p=node('p',undefined,'source');p.append(node('strong',`${branch} · `));
    if(e.kind==='absent'){p.append(document.createTextNode('Implementación no presente en esta rama.'));}
    else {const a=node('a',`${e.kind==='plan'?'Plan, no implementación':e.kind==='general-plan'?'Roadmap general (sin spec específica en esta rama)':'Ver código'} · ${e.repo}/${e.path}:${e.line}`);a.href=e.url;a.target='_blank';a.rel='noopener noreferrer';p.append(a);}
    content.append(p);
   }
   const history=node('div',undefined,'feature-timeline');history.append(node('p','Primera observación de implementación','feature-timeline-heading'));
   const historyList=node('ul');const baseline=baselineByKey.get(f.timelineKey);
   for(const branch of ['staging','main']){
    const item=node('li');item.append(node('strong',`${branch}: `));const detectedAt=f.implementationDates?.[branch];
    if(detectedAt){
     item.append(document.createTextNode(`${f[branch]?'detectada el':'registrada el'} `));const time=node('time',formatTimelineDate(detectedAt));time.dateTime=detectedAt;item.append(time);
     if(!f[branch])item.append(document.createTextNode('; actualmente pendiente'));
    }else if(baseline?.branches.includes(branch)){
     item.append(document.createTextNode(`ya implementada al inicio; fecha histórica no disponible${f[branch]?'':'; actualmente pendiente'}`));
    }
    else if(f[branch])item.append(document.createTextNode('implementada, sin fecha registrada'));
    else item.append(document.createTextNode('sin implementación registrada'));
    historyList.append(item);
   }
   history.append(historyList);content.append(history);
   details.append(content);label.append(details);row.append(label);
   for(const branch of ['staging','main']){
    const present=f[branch];const cell=node('td',undefined,'state-cell');const state=node('span',undefined,`state ${present?'implemented':'pending'}`);state.append(node('span',present?'✓':'×','status-icon'),node('span',present?'Implementado':'No implementado','state-label'));state.querySelector('.status-icon').setAttribute('aria-hidden','true');cell.append(state);row.append(cell);
   }fragment.append(row);
  }
 }
 $('feature-rows').replaceChildren(fragment);$('results').textContent=`${visible.length} de ${data.features.length} funcionalidades`;
 $('empty').hidden=visible.length!==0;
}
$('filters').addEventListener('submit',e=>e.preventDefault());
for(const id of ['search','category','status'])$(id).addEventListener(id==='search'?'input':'change',render);
$('reset').addEventListener('click',()=>{$('filters').reset();render();$('search').focus();});
$('export').addEventListener('click',()=>{const blob=new Blob([toCSV(visible)],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=node('a');a.href=url;a.download='rifero-funcionalidades.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
render();
renderTimeline();
