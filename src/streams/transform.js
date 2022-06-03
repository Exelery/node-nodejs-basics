import{ stdin, stdout }  from 'node:process';
import { Transform } from 'stream';

class Revert extends Transform {
    _transform(chunk, encoding,callback){
        chunk = chunk.toString().split('').reverse().join('');
        this.push(chunk);
        callback()
    }
}


export const transform = async () => {
    let myRevert = new Revert();
    
    // Write your code here 
    stdin.pipe(myRevert).pipe(stdout)
};

transform()