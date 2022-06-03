import { StopWatch } from "./stopWatch";
function dem(){
    let demo= new StopWatch();
    let sum=0;
    demo.start();
    for(let i=0;i<10000000;i++){
        sum+=i;
    }
    demo.end();
    console.log(demo.getTime());
    
}
dem();