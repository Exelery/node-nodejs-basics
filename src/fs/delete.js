import * as fsProm from 'fs/promises';
import * as fsSync from 'fs';

export const remove = async () => {
    // Write your code here 
    try {
        let path = "./src/fs/files/fileToRemove.txt"
         await fsProm.unlink(path)
    }catch(err) {
//        console.log(err)
        throw new Error("FS operation failed");
    }
};

remove()