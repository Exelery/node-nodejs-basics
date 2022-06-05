import cp  from 'child_process';

export const spawnChildProcess = async (args) => {
    // Write your code here

    let child = cp.fork("./src/cp/files/script.js", [args])
    child.on('something', (code)=>{
        console.log("data from child", code)
    })
    child.send("start")
};

spawnChildProcess("test")