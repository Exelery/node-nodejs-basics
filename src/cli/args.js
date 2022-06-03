import * as pr from 'process';

export const parseArgs = () => {
    // Write your code here 
    const flag1 = pr.argv.indexOf("--propName");
    const flag2 = pr.argv.indexOf("--prop2Name");
    console.log(`propName is ${pr.argv[flag1+1]}, prop2Name is ${pr.argv[flag2+1]}`)

};

//node src/cli/args.js --propName value --prop2Name value2

parseArgs()