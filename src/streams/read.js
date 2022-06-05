import * as fs from 'fs';
import{ stdout }  from 'node:process';


export const read = async () => {
    const streamTxt = fs.createReadStream("./src/streams/files/fileToRead.txt", 'utf8')
    streamTxt.on('data', chunk=> stdout.write(chunk));
    // Write your code here 
};

read()