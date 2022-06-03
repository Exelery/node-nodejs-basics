import * as fs from 'fs/promises';

const { createHmac } = await import('crypto');


export const calculateHash = async () => {
    // Write your code here 
    const text = await fs.readFile("./src/hash/files/fileToCalculateHashFor.txt", 'utf8')
   const hash =  createHmac('sha256', text ).digest('hex');
   console.log(hash)

};

calculateHash()