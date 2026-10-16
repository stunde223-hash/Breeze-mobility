import {cp,mkdir,rm} from 'node:fs/promises';
const output=new URL('../dist/',import.meta.url);
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
for(const file of ['index.html','style.css','app.js','privacy.html','terms.html','robots.txt','sitemap.xml','assets']){
 await cp(new URL(`../${file}`,import.meta.url),new URL(file,output),{recursive:true});
}
console.log('Static website built in dist/');
