import threads from 'worker_threads';
import os from 'os'

export const performCalculations = async () => {
    let result = []
    let workers= []
    // Write your code here
 //   const worker = new threads.Worker('./src/wt/worker.js',{workerData: 5})
    const cpu = os.cpus().length
    for (let i = 0; i < cpu; i++){
      
        workers[i] = new threads.Worker('./src/wt/worker.js', {workerData: 10+i})

        workers[i].once('message', res =>{
            result[i]= ({
                status: 'resolved',
                data: res               
            });
            if(result.length==cpu) console.log(result)
                  
        })
        

        
        
        
    }
 



};

performCalculations()
