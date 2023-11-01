import { MissionUtils } from '@woowacourse/mission-utils';
export default class Car {    
    constructor(name) {
        this.name = name;
        this.forward = 0;        
    }

    run() { 
        if (MissionUtils.Random.pickNumberInRange(0, 9)>3){
            this.forward++;
        }       

        return this.forword;
    }
    
    printRunResult() {
        MissionUtils.Console.print(`${this.name} : ${'-'.repeat(this.forward)}`)
    }

}