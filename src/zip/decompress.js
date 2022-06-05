import zlib from 'zlib'
import fs from 'fs'

export const decompress = async () => {
    // Write your code here 

    let unzip = zlib.createUnzip();

    let read = fs.createReadStream('./src/zip/files/archive.gz');
    let write = fs.createWriteStream('./src/zip/files/fileToWrite.txt');
    read.pipe(unzip).pipe(write)
};

decompress()