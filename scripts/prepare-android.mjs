import { cp, mkdir, copyFile } from 'node:fs/promises';
await mkdir('www/assets', { recursive: true });
for (const file of ['index.html','styles.css','app.js','manifest.webmanifest']) await copyFile(file, 'www/'+file);
await cp('assets', 'www/assets', { recursive: true });
console.log('Android web assets prepared in www/.');
