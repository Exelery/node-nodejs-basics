import threads from 'worker_threads';
import os from 'os'

export const performCalculations = async () => {
    let result = []
    let workers
    let promises = []
    // Write your code here
 //   const worker = new threads.Worker('./src/wt/worker.js',{workerData: 5})
    const cpu = os.cpus().length
    for (let i = 0; i < cpu; i++){
      
        workers = new threads.Worker('./src/wt/worker.js', {workerData: 10+i})

        promises.push(
            new Promise((resolve, reject) => {
            
            workers.on('message', res =>{
                resolve(res)            
                }).on('error', (err) => {
                    reject(err)
                })
  //              if(result.length==cpu) console.log(result)
                      
            }))
               
        
    }

    result = await Promise.allSettled(promises)
    
    result.forEach((response)=>{
        if(response.status == "fulfilled") response.status = 'resolved'
        if(response.status == 'rejected') {
            response.status = 'error'
            response.num = null
        }
    })
    console.log(result)

};

performCalculations()
