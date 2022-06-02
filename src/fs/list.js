import * as fsProm from 'fs/promises';

export const list = async () => {
    // Write your code here 
    let path = "./src/fs/files";
    try {
    
    console.log(await fsProm.readdir(path))
    } catch(err) {
        throw new Error("FS operation failed");
    }
};

list()