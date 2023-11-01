import { Console } from "@woowacourse/mission-utils";
import * as MissionUtils from "@woowacourse/mission-utils";

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
    var hypen='';
    hypen = hypen + nameArray[i] + ' : ';
    for(let j =0;j<moveArray[i];j++){
      hypen +='-';
    }
    MissionUtils.Console.print(hypen);
  }
}

function findMax(nameArray, moveArray, maxIdx){
  const resultArr=[];
  resultArr.push(nameArray[maxIdx]);
  for(let i =maxIdx+1; i<moveArray.length; i++){
    if(moveArray[maxIdx]===moveArray[i]){
      resultArr.push(nameArray[i]);
    }
  }
  return resultArr;
}


class App {
  async play() {
    const userInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = userInput.split(",");
    
    for(const carName of carNames){
      if(carName.length>5){
        throw new Error("[ERROR]");
      }
    }

    const userNum = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    var move = new Array();
    MissionUtils.Console.print("\n실행 결과");

    for(let i =0;i<carNames.length;i++){
      move[i]=0;
    }

    for(let i=0; i<userNum;i++){
      getRandom(carNames.length, move);
      printResult(carNames,move);
      MissionUtils.Console.print(" ");
    }

    let max = move[0];
    let maxIndex = 0;
    for(let i = 0; i<move.length; i++){
      if(move[i]>max){
        max = move[i];
        maxIndex = i;
      }
    }

    const winner = findMax(carNames, move, maxIndex);

    process.stdout.write("최종 우승자 : ");
    for(let i =0;i<winner.length;i++){
      if(i === winner.length-1){
        process.stdout.write(winner[i]+"\n");
      }
      else{
        process.stdout.write(winner[i] + ", ");
      }
    }

  }
}

export default App;
