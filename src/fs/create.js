import * as fs from 'fs';

export const create = async () => {
    // Write your code here 
    const path = "./src/fs/files/fresh.txt";
    const error = new Error('FS operation failed');
    fs.access(path, function(err){
        if(err == null) {
            throw new Error("FS operation failed")
        } else {
            fs.writeFile(path, 'I am fresh and young', function(err) {
                if(err) throw err
            })
        }
    }) 

    
};

create()