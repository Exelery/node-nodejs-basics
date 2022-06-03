import * as path from 'path';
import { release, version } from 'os';
import  {createServer as createServerHttp}  from 'http';

import aJson from './files/a.json'  assert { type: "json" };
import bJson from './files/b.json'  assert { type: "json" };
import './files/c.js';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = aJson;
} else {
    unknownObject = bJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

 /* export default {
    unknownObject,
    createMyServer,
}; */

//node src/modules/cjsToEsm.mjs --experimental-json-modules