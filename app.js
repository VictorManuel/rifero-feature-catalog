import data from './data.js';
import {filterFeatures,toCSV} from './model.mjs';
const $=id=>document.getElementById(id);
const node=(tag,text,cls)=>{const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(cls)el.className=cls;return el;};
const date=new Intl.DateTimeFormat('es-AR',{dateStyle:'long',timeStyle:'short',timeZone:'America/Argentina/Buenos_Aires'}).format(new Date(data.generatedAt));
const categories=[...new Set(data.features.map(f=>f.category))];
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
$('snapshot').textContent=`Generado el ${date} (Argentina). Referencias origin/main y origin/staging disponibles localmente al generar el inventario. El refresco de datos no hace fetch automáticamente. No se incluyen cambios sin integrar ni archivos locales modificados.`;
$('footer-date').textContent=`Snapshot · ${date}`;
for(const [repo,branches] of Object.entries(data.refs)){
 const li=node('li');li.append(node('strong',`${repo}: `));
 for(const [branch,sha] of Object.entries(branches)){
  const a=node('a',`${branch} ${sha.slice(0,7)}`);a.href=`https://github.com/${data.repos[repo]}/commit/${sha}`;a.target='_blank';a.rel='noopener noreferrer';li.append(a,document.createTextNode(' '));
 }$('references').append(li);
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
   const details=node('details',undefined,'feature-detail');const summary=node('summary');
   summary.append(node('span',f.id,'feature-id'),node('span',f.title,'feature-title'),node('span','+','expand'));details.append(summary);
   const content=node('div',undefined,'detail-content');content.append(node('p',f.note));
   if(f.staging!==f.main)content.append(node('p','Esta capacidad tiene distinto estado entre las dos ramas.','difference-note'));
   for(const branch of ['staging','main']){
    const e=f.evidence[branch];const p=node('p',undefined,'source');p.append(node('strong',`${branch} · `));
    if(e.kind==='absent'){p.append(document.createTextNode('Implementación no presente en esta rama.'));}
    else {const a=node('a',`${e.kind==='plan'?'Plan, no implementación':e.kind==='general-plan'?'Roadmap general (sin spec específica en esta rama)':'Ver código'} · ${e.repo}/${e.path}:${e.line}`);a.href=e.url;a.target='_blank';a.rel='noopener noreferrer';p.append(a);}
    content.append(p);
   }
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
