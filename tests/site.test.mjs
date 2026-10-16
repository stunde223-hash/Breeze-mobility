import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const html=readFileSync('index.html','utf8');
test('all on-page links resolve to an existing section',()=>{for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes(`id="${id}"`),id);});
test('local linked resources and legal pages exist',()=>{for(const [,path] of html.matchAll(/(?:href|src)="\/([^"#]+)"/g))assert.ok(existsSync(path.split("?")[0]),path);});
test('search metadata and structured business data are valid',()=>{const data=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);assert.equal(data.address.addressLocality,'New York');assert.equal((html.match(/<h1[ >]/g)||[]).length,1);assert.match(html,/<link rel="canonical"/);assert.match(html,/<meta name="description"/);});
test('photographs are in server-delivered HTML with sizing and alt text',()=>{for(const image of html.matchAll(/<img\b[^>]+>/g)){assert.match(image[0],/ src="\/assets\//);assert.match(image[0],/ alt="[^"]+"/);assert.match(image[0],/ width="\d+"/);assert.match(image[0],/ height="\d+"/);}});
test('FAQ structured answers match the questions and answers visitors can read',()=>{const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));const faq=schemas.find(s=>s['@type']==='FAQPage');const visible=[...html.matchAll(/<details><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/gs)];assert.equal(faq.mainEntity.length,visible.length);for(let i=0;i<visible.length;i++){assert.equal(faq.mainEntity[i].name,visible[i][1]);assert.equal(faq.mainEntity[i].acceptedAnswer.text,visible[i][2].replace(/<[^>]*>/g,''));}});
