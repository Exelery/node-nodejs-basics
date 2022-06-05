import cp  from 'child_process';

export const spawnChildProcess = async (args) => {
    // Write your code here

    cp.exec(`node "./src/cp/files/script.js" args`, (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }
        console.log( stdout)
    } )
};

spawnChildProcess()