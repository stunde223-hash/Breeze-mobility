import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const html=readFileSync('index.html','utf8');
test('all on-page links resolve to an existing section',()=>{for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes(`id="${id}"`),id);});
test('local linked resources and legal pages exist',()=>{for(const [,path] of html.matchAll(/(?:href|src)="\/([^"#]+)"/g))assert.ok(existsSync(path),path);});
test('search metadata and structured business data are valid',()=>{const data=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);assert.equal(data.address.addressLocality,'New York');assert.equal((html.match(/<h1[ >]/g)||[]).length,1);assert.match(html,/<link rel="canonical"/);assert.match(html,/<meta name="description"/);});
test('photographs are in server-delivered HTML with sizing and alt text',()=>{for(const image of html.matchAll(/<img\b[^>]+>/g)){assert.match(image[0],/ src="\/assets\//);assert.match(image[0],/ alt="[^"]+"/);assert.match(image[0],/ width="\d+"/);assert.match(image[0],/ height="\d+"/);}});
