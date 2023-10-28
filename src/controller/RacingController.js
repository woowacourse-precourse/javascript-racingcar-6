import { scoreAccumulator, traceAccumulator } from "../util/Accumulator.js";
import { randomArrayGenerator } from "../util/RandomArrayGenerator.js";
import Converter from "../util/Converter.js";
import { Console } from "@woowacourse/mission-utils";
import { findWinner } from "./FindeWinner.js";

class RacingController {  
  playersArray;
  attemptNumber;

  scoreData = [];
  traceData = [];
  playTime = 0;

  constructor(playersArray, attemptNumber) {
    this.playersArray = playersArray
    this.attemptNumber = attemptNumber;
  }

  startRacing(randomArray) {
    this.scoreData = Converter.scoreFilter(randomArray); // 최초 scoreData,traceData 업로드
    this.traceData = Converter.traceFilter(randomArray);

    Console.print('실행 결과');
    this.traceMaker();
    
  }

  traceMaker() {                                           //data에 저장된 값을 기반으로 trace 출력
    this.traceData.forEach((element, index) => {
      Console.print(this.playersArray[index] + ' : ' + element);
    })  
    Console.print('');

    this.playTime++;

    if (this.playTime === this.attemptNumber) {
      
      const result = findWinner(this.playersArray,this.scoreData);
      return Console.print(`최종 우승자 : ${result.join(', ')}`);
    }
    
    this.renewData(); 
  }

  renewData() {                                           //새로운 랜덤값생성, scoreData,traceData 갱신. traceMaker로 콜백
    const newRandomArray = randomArrayGenerator(this.playersArray.length)
    
    this.scoreData = scoreAccumulator(this.scoreData, newRandomArray);
    this.traceData = traceAccumulator(this.traceData, newRandomArray);

    this.traceMaker() 
  }
}

export default RacingController;

/*
const a  = new RacingController(['pobi','crong','woong'],20);
a.startRacing([3,4,5]);
*/
