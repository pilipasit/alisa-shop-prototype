// Production build for the web-shop prototype — run `npm run build` after editing any .jsx.
//
// What it does (all output is committed, GitHub Pages / Cloudflare Pages just serve the files):
//   1. Precompiles the JSX with Babel ONCE here, instead of shipping Babel (~3 MB) to every phone and
//      compiling on the device. Each page gets one bundle: build/shop-mobile.js, build/shop-desktop.js.
//      The .jsx files stay the source of truth; the IIFE in each file keeps them independent.
//   2. Vendors React 18.3.1 / ReactDOM (production UMD) to build/vendor/ — no unpkg at runtime,
//      so the CSP can be script-src 'self' (no 'unsafe-eval', no 'unsafe-inline', no CDN).
//   3. Builds build/icons.js: only the Lucide icons the shop actually uses (~15 KB instead of the full
//      355 KB set) plus a tiny `lucide.createIcons()` that turns <i data-lucide="name"> into <svg>
//      the same way Lucide does (classes lucide lucide-name, copies the element's attributes).
//   `npm run check` fails if the committed build is older than the sources.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformSync } from '@babel/core';
import * as lucide from 'lucide';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WS = join(ROOT, 'ui_kits', 'webshop');
const OUT = join(WS, 'build');
const CHECK = process.argv.includes('--check');

const COMMON = ['data.jsx', 'ui.jsx', 'screens1.jsx', 'screens2.jsx', 'legal.jsx'];
const BUNDLES = { 'shop-mobile.js': [...COMMON, 'app.jsx'], 'shop-desktop.js': [...COMMON, 'desktop.jsx'] };
const read = (p) => readFileSync(p, 'utf8');

/* <i data-lucide="name" …/> in JSX → <window.AlisaIcon data-lucide="name" …/>: React renders the <svg> itself.
   (Letting lucide.createIcons() swap React's <i> nodes for <svg> behind React's back missed icons that appear on
   local state changes and can crash React when it later removes such a node.) Static HTML still uses createIcons. */
function lucideJsx({ types: t }) {
  const tag = () => t.jsxMemberExpression(t.jsxIdentifier('window'), t.jsxIdentifier('AlisaIcon'));
  return { visitor: { JSXElement(path) {
    const op = path.node.openingElement;
    if (!t.isJSXIdentifier(op.name, { name: 'i' })) return;
    if (!op.attributes.some(a => t.isJSXAttribute(a) && t.isJSXIdentifier(a.name, { name: 'data-lucide' }))) return;
    op.name = tag();
    if (path.node.closingElement) path.node.closingElement.name = tag();
  } } };
}

function compile(file) {
  const { code } = transformSync(read(join(WS, file)), {
    filename: file, babelrc: false, configFile: false,
    plugins: [lucideJsx],
    presets: [['@babel/preset-react', { runtime: 'classic' }]],   // React is a global (UMD)
    comments: false, compact: true, minified: true, sourceMaps: false,
  });
  return `/* ${file} */\n${code}\n`;
}

/* every string that names a Lucide icon in the sources (static <i data-lucide="…"> and names kept in data) */
function usedIcons() {
  const srcs = [...new Set([...COMMON, 'app.jsx', 'desktop.jsx'])].map(f => read(join(WS, f)))
    .concat(['index.html', 'desktop.html', 'blueprint.html', 'showcase/showcase.js', '../../index.html'].filter(f => existsSync(join(WS, f))).map(f => read(join(WS, f))));
  const pascal = (n) => n.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
  const names = new Set();
  for (const s of srcs) for (const m of s.matchAll(/["'`]([a-z][a-z0-9]*(?:-[a-z0-9]+)*)["'`]/g)) {
    if (lucide.icons[pascal(m[1])]) names.add(m[1]);
  }
  /* sanity: every literal data-lucide="…" must exist */
  for (const s of srcs) for (const m of s.matchAll(/data-lucide="([a-z0-9-]+)"/g)) {
    if (!lucide.icons[pascal(m[1])]) throw new Error('unknown Lucide icon: ' + m[1]);
  }
  const map = {};
  /* Lucide icon = ['svg', defaultAttrs, children]; keep only the children, the defaults are in BASE below */
  [...names].sort().forEach(n => { const ic = lucide.icons[pascal(n)]; map[n] = ic[0] === 'svg' ? ic[2] : ic; });
  return map;
}

function iconsJs(map) {
  return `/* Lucide ${JSON.parse(read(join(ROOT, 'node_modules/lucide/package.json'))).version} (ISC) — only the ${Object.keys(map).length} icons the shop uses. Built by tools/build.mjs. */
(function(){
var I=${JSON.stringify(map)};
var NS='http://www.w3.org/2000/svg';
var BASE={xmlns:NS,width:24,height:24,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':2,'stroke-linecap':'round','stroke-linejoin':'round'};
function make(name,el){var node=I[name];if(!node)return null;var svg=document.createElementNS(NS,'svg');var k;
for(k in BASE)svg.setAttribute(k,BASE[k]);
for(var i=0;i<el.attributes.length;i++){var a=el.attributes[i];svg.setAttribute(a.name,a.value);}
svg.setAttribute('class',['lucide','lucide-'+name,el.getAttribute('class')||''].join(' ').trim());
node.forEach(function(c){var e=document.createElementNS(NS,c[0]);for(var key in c[1])e.setAttribute(key,c[1][key]);svg.appendChild(e);});
return svg;}
function createIcons(){var els=document.querySelectorAll('[data-lucide]');for(var i=0;i<els.length;i++){var el=els[i];if(el.tagName.toLowerCase()==='svg')continue;
var svg=make(el.getAttribute('data-lucide'),el);if(svg&&el.parentNode)el.parentNode.replaceChild(svg,el);}}
window.lucide={createIcons:createIcons,icons:I};
/* React component used by the compiled JSX (see lucideJsx in tools/build.mjs) */
window.AlisaIcon=function(p){var R=window.React,name=p['data-lucide'],node=I[name]||[],a={},k;
for(k in BASE)a[k==='stroke-width'?'strokeWidth':k==='stroke-linecap'?'strokeLinecap':k==='stroke-linejoin'?'strokeLinejoin':k]=BASE[k];
for(k in p)if(k!=='children'&&k!=='className')a[k]=p[k];
a.className=('lucide lucide-'+name+' '+(p.className||'')).trim();
if(!I[name]&&window.console)console.warn('Lucide icon missing from build/icons.js:',name);
return R.createElement.apply(null,['svg',a].concat(node.map(function(c,i){var at={key:i},q;for(q in c[1])at[q==='stroke-width'?'strokeWidth':q==='fill-rule'?'fillRule':q==='clip-rule'?'clipRule':q]=c[1][q];return R.createElement(c[0],at);})));};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',createIcons);else createIcons();
})();
`;
}

const outputs = {};
for (const [name, files] of Object.entries(BUNDLES)) {
  outputs[name] = `/* Alisa web shop — ${name}. GENERATED by tools/build.mjs from ${files.join(', ')}. Do not edit; edit the .jsx and run npm run build. */\n`
    + files.map(compile).join('');
}
outputs['icons.js'] = iconsJs(usedIcons());

/* one stylesheet instead of styles.css → 6 sequential @imports: the design-system tokens concatenated in the
   same order as styles.css. The Google Fonts @import must stay first (CSS requires @import before rules). */
{
  const order = [...read(join(ROOT, 'styles.css')).matchAll(/@import url\('\.\/(tokens\/[a-z-]+\.css)'\)/g)].map(m => m[1]);
  const NL = String.fromCharCode(10);
  const parts = order.map(f => `/* ${f} */` + NL + read(join(ROOT, f)).replace(/\r/g, '').trim());
  const imports = [], rest = [];
  parts.forEach(t => t.split(NL).forEach(l => (/^@import /.test(l) ? imports : rest).push(l)));
  /* the Google Fonts @import is dropped here: the shop pages <link> it directly (with preconnect), so the font CSS
     loads in parallel instead of after this file. Keep that <link> URL equal to tokens/fonts.css. */
  outputs['shop.css'] = `/* Alisa design-system tokens for the shop — GENERATED by tools/build.mjs from ${order.join(', ')}. */` + NL
    + `/* fonts: ${imports.join(' ').replace(/^@import url\('|'\);$/g, '')} — linked from the HTML */` + NL
    + rest.join(NL) + NL;
}

const sourceHash = createHash('sha256');
[...new Set([...COMMON, 'app.jsx', 'desktop.jsx'])].forEach(f => sourceHash.update(read(join(WS, f))));
const manifest = JSON.stringify({ sources: sourceHash.digest('hex').slice(0, 16),
  files: Object.fromEntries(Object.entries(outputs).map(([k, v]) => [k, createHash('sha256').update(v).digest('hex').slice(0, 16)])) }, null, 1) + '\n';

if (CHECK) {
  const old = existsSync(join(OUT, 'manifest.json')) ? read(join(OUT, 'manifest.json')) : '';
  if (old !== manifest) { console.error('build/ is out of date — run: npm run build'); process.exit(1); }
  console.log('build/ is up to date'); process.exit(0);
}

mkdirSync(join(OUT, 'vendor'), { recursive: true });
for (const [name, code] of Object.entries(outputs)) writeFileSync(join(OUT, name), code);
writeFileSync(join(OUT, 'manifest.json'), manifest);
copyFileSync(join(ROOT, 'node_modules/react/umd/react.production.min.js'), join(OUT, 'vendor/react.production.min.js'));
copyFileSync(join(ROOT, 'node_modules/react-dom/umd/react-dom.production.min.js'), join(OUT, 'vendor/react-dom.production.min.js'));
for (const [name, code] of Object.entries(outputs)) console.log(name.padEnd(16), (Buffer.byteLength(code) / 1024).toFixed(1), 'KB');
console.log('icons:', Object.keys(JSON.parse(manifest).files).length, 'files; vendor React 18.3.1 copied');
