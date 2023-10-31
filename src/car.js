import { MissionUtils } from "@woowacourse/mission-utils";

class Car{
    constructor(names){
        this.name = names.split(',');
        this.far = [];
        for( let i = 0; i < this.name.length; i++){
            this.far.push(0)
            if(this.name[i].length < 6){
                throw new Error('[ERROR] 이름은 5자 이하만 가능합니다')
            }
        }
    }
    playgame(playTime){
        MissionUtils.Console.print('실행 결과')
        for(let i = 0; i<playTime; i++){
            for(let i = 0; i<this.name.length;i++){
                this.randomRacing(i)
            }
            MissionUtils.Console.print(' ')
        }
    }

    randomRacing(i){
      let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if(randomNumber >= 4 ){
        this.far[i] = this.far[i] + 1
      }
      let mark = ''
      for(let i = 0; i<this.far[i];i++){
        mark = mark+'-'
      }
      MissionUtils.Console.print(`${this.name[i]} : ${mark}`)
    }

    pritnResult(){
        let winner = ''
        let maxfar = 0
        for(let i = 0; i<this.far.length; i++){
            if(this.far[i] > maxfar){
                winner = this.name[i]
            }else if(this.far[i] == maxfar){
                winner = winner +', '+this.name[i]
            }
        }
        MissionUtils.Console.print(`최종우승자 : ${winner}`)
    }
  }

  export default Car