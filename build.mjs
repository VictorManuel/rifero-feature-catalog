import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
// Only these static files are public. Never publish source docs, scripts or captures.
const assets = ['index.html', 'styles.css', 'app.js', 'model.mjs', 'data.js'];
const digest = content => createHash('sha256').update(content).digest('hex');

export async function buildSite(root) {
  const output = resolve(root, 'dist');
  const content = Object.fromEntries(await Promise.all(assets.map(async name => [name, await readFile(resolve(root, name), 'utf8')])));
  // Version each dependency, not just HTML: a cached app module must not pin old data.
  for (const name of ['data.js', 'model.mjs']) {
    const pattern = new RegExp(`(['"])\\./${name.replace('.', '\\.')}\\1`, 'g');
    if (!pattern.test(content['app.js'])) throw new Error('Missing public module import: '+name);
    pattern.lastIndex = 0;
    content['app.js'] = content['app.js'].replace(pattern, `'./${name}?v=${digest(content[name])}'`);
  }
  for (const [name, attribute] of [['app.js','src'], ['styles.css','href']]) {
    const before = `${attribute}="./${name}"`;
    if (!content['index.html'].includes(before)) throw new Error('Missing public asset link: '+name);
    content['index.html'] = content['index.html'].replace(before, `${attribute}="./${name}?v=${digest(content[name])}"`);
  }
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  for (const name of assets) await writeFile(resolve(output, name), content[name]);
  await writeFile(resolve(output, '.nojekyll'), '');
  return { assets: assets.length, dataHash: digest(content['data.js']), appHash: digest(content['app.js']) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await buildSite(fileURLToPath(new URL('.', import.meta.url)));
  console.log(`Static site prepared: ${result.assets} versioned assets + .nojekyll`);
}
