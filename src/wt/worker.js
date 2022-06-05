import threads from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
        let temp = threads.workerData

    threads.parentPort.postMessage(nthFibonacci(temp))

    // This function sends result of nthFibonacci computations to main thread
};

sendResult()
