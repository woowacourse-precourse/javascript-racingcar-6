import { Console } from "@woowacourse/mission-utils";
import * as MissionUtils from "@woowacourse/mission-utils";

function findError(){
  try{
    throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
  }catch(e){
    console.log(e.message);
  }
}

function getRandom(carNum,moveArray){
  for(let i = 0; i<carNum;i++){
    const number = MissionUtils.Random.pickNumberInRange(0,9);
    if(number>3){
      moveArray[i] += 1;
    }
  }
}

function printResult(nameArray, moveArray){
  for(let i =0; i<nameArray.length; i++){
    process.stdout.write(nameArray[i] + " : ");
    for(let j =0;j<moveArray[i];j++){
      process.stdout.write("-");
    }
    process.stdout.write("\n");
  }
}

class App {
  async play() {
    const userInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carName = userInput.split(",");
    
    for(let i =0;i<carName.length;i++){
      if(carName[i].length>5){
        findError();
        return;
      }
    }

    const userNum = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    var move = new Array();

    while(move.length < carName.length){
      move.push(0);
    } // 배열 초기화

    for(let i=0; i<userNum;i++){
      getRandom(carName.length, move);
      printResult(carName,move);
      process.stdout.write("\n");
    }
  }
}

export default App;
