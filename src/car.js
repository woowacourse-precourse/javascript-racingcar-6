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
        for(let i = 0; i<this.name.length;i++){
            this.randomRacing(i)
        }
    }
    printResult(){
      MissionUtils.Console.print(`${this.name} : ${this.far}`)
    }
    randomRacing(i){

    }
  }

  export default Car