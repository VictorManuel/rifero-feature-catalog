export const normalize = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function filterFeatures(features, {query='',category='all',status='all'}={}) {
 const words=normalize(query).trim().split(/\s+/).filter(Boolean);
 return features.filter(f => (category==='all'||f.category===category) && words.every(w=>normalize(`${f.id} ${f.title} ${f.note} ${f.category}`).includes(w)) && ({all:true,both:f.staging&&f.main,differences:f.staging!==f.main,pending:!f.staging&&!f.main,staging:f.staging,main:f.main}[status]??false));
}
export function toCSV(features) {
 const cell=v=>'"'+String(v).replace(/^[=+@\-\t\r]/,"'$&").replaceAll('"','""')+'"';
 const rows=[['ID','Categoría','Funcionalidad','Staging','Main (producción)','Notas','Evidencia staging','Evidencia main'],...features.map(f=>[f.id,f.category,f.title,f.staging?'Implementado':'No implementado',f.main?'Implementado':'No implementado',f.note,f.evidence.staging.url,f.evidence.main.url])];
 return '\uFEFF'+rows.map(row=>row.map(cell).join(';')).join('\r\n');
}
