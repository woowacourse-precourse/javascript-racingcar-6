import { MissionUtils } from '@woowacourse/mission-utils';
class Car {    
    constructor(name) {
        this.name = name;
        this.forward = 0;
        
    }
    run() { 
        if (MissionUtils.Random.pickNumberInRange(0, 9)>=4){
            this.forward++;
        }       
        return this.forword;
    }
    printRunResult() {
        MissionUtils.Console.print(`${this.name} : ${'-'.repeat(this.forward)}`)
    }

}