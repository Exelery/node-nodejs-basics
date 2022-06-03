import * as pr from 'process';


export const parseEnv = () => {
    // Write your code here 
    let filtred = Object.entries(pr.env).filter(([key, value]) => key.includes("RSS_"))
 //   
    let filteredObj = Object.fromEntries(filtred)
    let temp =[]
    for (let key in filteredObj) {
        temp.push(`${key}=${filteredObj[key]}`)

    }
        console.log( temp.join("; "))
};

parseEnv()

//$env:RSS_Text="value1"; $env:RSS_Text2="value2"; node  src/cli/env.js    