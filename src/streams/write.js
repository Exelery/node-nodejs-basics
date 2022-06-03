import * as fs from 'fs';
import{ stdin, stdout }  from 'node:process';

export const write = async () => {
    // Write your code here 
    const output = fs.createWriteStream("./src/streams/files/fileToWrite.txt", 'utf8')
    stdin.pipe(output)  
};

write()

// node src/streams/write.js