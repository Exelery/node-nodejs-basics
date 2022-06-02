import * as fsProm from 'fs/promises';


export const read = async () => {
    // Write your code here 
    let path = "./src/fs/files/fileToRead.txt"
    try{
    console.log( await fsProm.readFile(path, "utf-8"))
    }catch(err) {
        throw new Error("FS operation failed");
    }
};

read()