import * as MissionUtils from "@woowacourse/mission-utils";
import Race from './Race.js';

class App {
  async play() {

    const INPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const USER_INPUT = INPUT.split(',').map(String);
    const NUM = USER_INPUT.length;

    for(var i = 0 ; i < NUM ; i++){
        if (USER_INPUT[i].length >= 5) {
          throw new Error("[ERROR] 이름이 잘못된 형식입니다");
        }
    }

    const ROUND = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    var PLAYER = new Array(NUM);
    for(var i = 0 ; i < NUM ; i++){
      PLAYER[i] = "";
    }
      
    for(var i = 0 ; i < ROUND ; i++){
      for(var j = 0 ; j < NUM ; j++){
        PLAYER[j] += Race();
        MissionUtils.Console.print(USER_INPUT[j] + " : " + PLAYER[j]);
      }
    }
    let max=0
    var Winner = new Array();
    var Winners= new Array();
    for(var i=0; i< PLAYER.length; i++){
      
      Winner[i]=PLAYER[i].length;


      if (Winner[i] > max) {
        max = Winner[i];
      }

    }
    for(var i=0; i< PLAYER.length; i++){

      if (max===Winner[i]){
        Winners.push(USER_INPUT[i]);
      } 

    }
    

    MissionUtils.Console.print("최종 우승자 : "+ Winners);
    
  
 }
}

export default App;
