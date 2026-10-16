import { mkdir, copyFile, writeFile, rm } from 'node:fs/promises';
// Only these static files are public. Never publish source docs, scripts or captures.
const assets = ['index.html', 'styles.css', 'app.js', 'model.mjs', 'data.js'];
const output = new URL('./dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const asset of assets) await copyFile(new URL(asset, import.meta.url), new URL(asset, output));
await writeFile(new URL('.nojekyll', output), '');
console.log(`Static site prepared: ${assets.length} assets + .nojekyll`);
