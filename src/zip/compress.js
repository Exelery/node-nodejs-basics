import zlib from 'zlib'
import fs from 'fs'

export const compress = async () => {
    // Write your code here 
    let zip = zlib.createGzip();

    let read = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    let write = fs.createWriteStream('./src/zip/files/archive.gz');
    read.pipe(zip).pipe(write)
};

compress()