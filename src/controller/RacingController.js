import { scoreAccumulator, traceAccumulator } from "../util/Accumulator.js";
import { randomArrayGenerator } from "../util/RandomArrayGenerator.js";
import Converter from "../util/Converter.js";
import { Console } from "@woowacourse/mission-utils";

class RacingController {  
  #playersArray;
  #attemptNumber;

  #scoreData = []
  #traceData = []
  #playTime = 0;

  constructor(playersArray, attemptNumber) {
    this.#playersArray = playersArray
    this.#attemptNumber = attemptNumber;
  }

  startRacing(randomArray) {
    this.#scoreData = Converter.scoreFilter(randomArray);
    this.#traceData = Converter.traceFilter(randomArray);
    Console.print('실행 결과');
    this.traceMaker(randomArray);
  }

  traceMaker(randomArray) {      
    this.#traceData.forEach((element, index) => {

      Console.print(this.#playersArray[index] + ' : ' + element);
       
    })
    Console.print('');

    this.#playTime++ //플레이타임 갱신
    if (this.#playTime === this.#attemptNumber) {
      return
    }  
    const newRandomArray = randomArrayGenerator(this.#playersArray.length)
    
    this.#scoreData = scoreAccumulator(this.#scoreData, newRandomArray);
    this.#traceData = traceAccumulator(this.#traceData, newRandomArray);
    this.traceMaker(newRandomArray) // 탈출못하면 재시작
  }
}

export default RacingController;

const a  = new RacingController(['pobi','crong','bhhan','suhyang'],7);
a.startRacing([4,4,4,4]);
