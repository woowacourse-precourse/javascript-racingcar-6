import { MissionUtils } from "@woowacourse/mission-utils";

class Car{
    constructor(names){
        this.name = names.split(',');
        this.far = [];
        for( let i = 0; i < this.name.length; i++){
            this.far.push(0)
        }
    }
    playgame(){
      randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if(randomNumber >=4 ){
        far = far + 1
      }
    }
    printResult(){
      MissionUtils.Console.print(`${this.name} : ${this.far}`)
    }
  }

  export default Car