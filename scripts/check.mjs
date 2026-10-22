// Sanity check for the built package. Run from the repo root: node scripts/check.mjs
// Loads bundle.js in a sandbox with a stub React, then checks namespace, components, tokens and docs.
import fs from 'node:fs';
import vm from 'node:vm';

const fail = (m) => { console.error('CHECK FAILED: ' + m); process.exit(1); };
const read = (p) => { if (!fs.existsSync(p)) fail(p + ' is missing'); return fs.readFileSync(p, 'utf8'); };

const src = JSON.parse(read('design-system/SOURCE.json'));
const bundle = read('design-system/components/bundle.js');
const header = JSON.parse(bundle.match(/\/\* @ds-bundle: (\{.*?\}) \*\//)[1]);

const stubReact = { createElement: () => null, useState: (v) => [v, () => {}], useRef: (v) => ({ current: v }),
  useEffect: () => {}, useMemo: (f) => f(), useCallback: (f) => f, useId: () => 'id', Children: { map: () => [], toArray: () => [] }, Fragment: 'f' };
const sandbox = { window: { React: stubReact }, React: stubReact, document: undefined, navigator: {} };
vm.createContext(sandbox);
try { vm.runInContext(bundle, sandbox); } catch (e) { fail('bundle.js threw while loading: ' + e.message); }

const ns = sandbox.window[src.namespace];
if (!ns) fail('window.' + src.namespace + ' was not defined by bundle.js');
const missing = header.components.map((c) => c.name).filter((n) => typeof ns[n] !== 'function');
if (missing.length) fail('components missing from window.' + src.namespace + ': ' + missing.join(', '));

const css = read('design-system/tokens/tokens.css');
const used = new Set([...read('design-system/components/bundle.css').matchAll(/var\(--(ra-[a-z0-9-]+)/g)].map((m) => m[1]));
const defined = new Set([...css.matchAll(/--(ra-[a-z0-9-]+)\s*:/g)].map((m) => m[1]));
const undef = [...used].filter((v) => !defined.has(v));
if (/--bm-/.test(css) || /var\(--bm-/.test(read('design-system/components/bundle.css'))) fail('old --bm- tokens found');
if (undef.length) console.warn('note: bundle.css reads ' + undef.length + ' variables tokens.css does not define (may be set at runtime): ' + undef.slice(0, 8).join(', '));

for (const n of header.components.map((c) => c.name)) read('design-system/docs/components/' + n + '.md');
read('design-system/docs/components/INDEX.md');

console.log(`OK — ${header.components.length} components on window.${src.namespace}, ${defined.size} tokens, docs complete. Source: ${src.lastChange?.at || 'unknown'}`);
