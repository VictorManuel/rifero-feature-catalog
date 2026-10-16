import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const assets = { '/': ['index.html','text/html'], '/styles.css':['styles.css','text/css'], '/app.js':['app.js','text/javascript'], '/data.js':['data.js','text/javascript'], '/model.mjs':['model.mjs','text/javascript'] };
const port = Number(process.env.PORT || 4317);
createServer(async (req,res) => {
  const asset = assets[new URL(req.url, 'http://localhost').pathname];
  if (!asset) { res.writeHead(404); res.end('No encontrado'); return; }
  try { const body = await readFile(new URL(asset[0], import.meta.url)); res.writeHead(200, {'Content-Type':`${asset[1]}; charset=utf-8`,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Content-Security-Policy':"default-src 'self'; style-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"}); res.end(body); }
  catch {res.writeHead(500); res.end('No se pudo cargar el visor');}
}).listen(port,'127.0.0.1',()=>console.log(`Rifero: http://localhost:${port}`));
