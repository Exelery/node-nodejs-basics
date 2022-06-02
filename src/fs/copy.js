import * as fs from 'fs';
import * as path from "path";


export const copy = async () => {
    // Write your code here 
   // fs.mkdir("./src/fs/files_copy")
   let from = "./src/fs/files";
   let to = "./src/fs/files_copy";
   if(fs.existsSync(to) || !fs.existsSync(from)) throw new Error("FS operation failed");
   fs.mkdirSync(to);
   fs.readdirSync(from).forEach(el => {
       fs.copyFileSync(path.join(from, el), path.join(to, el))
   })
};

copy()