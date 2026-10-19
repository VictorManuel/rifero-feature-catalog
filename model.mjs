export const normalize = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function filterFeatures(features, {query='',category='all',status='all'}={}) {
 const words=normalize(query).trim().split(/\s+/).filter(Boolean);
 return features.filter(f => (category==='all'||f.category===category) && words.every(w=>normalize(`${f.id} ${f.title} ${f.note} ${f.category}`).includes(w)) && ({all:true,both:f.staging&&f.main,differences:f.staging!==f.main,pending:!f.staging&&!f.main,staging:f.staging,main:f.main}[status]??false));
}
export function partitionFeaturesByImplementation(features) {
 const implementedBoth=[];const other=[];
 for(const feature of features)(feature.staging&&feature.main?implementedBoth:other).push(feature);
 return {implementedBoth,other};
}
export function toCSV(features) {
 const cell=v=>'"'+String(v).replace(/^[=+@\-\t\r]/,"'$&").replaceAll('"','""')+'"';
 const rows=[['ID','Categoría','Funcionalidad','Staging','Main (producción)','Primera detección staging','Primera detección main','Notas','Evidencia staging','Evidencia main'],...features.map(f=>[f.id,f.category,f.title,f.staging?'Implementado':'No implementado',f.main?'Implementado':'No implementado',f.implementationDates?.staging??'',f.implementationDates?.main??'',f.note,f.evidence.staging.url,f.evidence.main.url])];
 return '\uFEFF'+rows.map(row=>row.map(cell).join(';')).join('\r\n');
}

// Operational closeouts retain their evidenced completion date. They never
// fabricate feature implementation dates or become catalog capabilities.
export function timelineEntries(timeline={}) {
 const implementations=(timeline.events??[]).map(event=>({...event,kind:'implementation',occurredAt:event.implementedAt}));
 const milestones=(timeline.milestones??[]).map(event=>({...event,kind:'operational-milestone',occurredAt:event.completedAt}));
 return [...implementations,...milestones].sort((a,b)=>Date.parse(b.occurredAt)-Date.parse(a.occurredAt)||String(a.key).localeCompare(String(b.key)));
}
