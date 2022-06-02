import * as fs from 'fs/promises';
import * as fsSync from 'fs';

export const rename = async () => {
    // Write your code here 
    
    let oldPath = "./src/fs/files/wrongFilename.txt"
    let newPath = "./src/fs/files/properFilename.md"
    if(fsSync.existsSync(newPath || !fsSync.existsSync(oldPath))) throw new Error("FS operation failed");
    fs.rename(oldPath, newPath )
};

rename()