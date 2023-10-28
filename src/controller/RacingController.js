import { TraceAccumulator, scoreAccumulator } from "../util/Accumulator.js";
import { randomArrayGenerator } from "../util/RandomArrayGenerator.js";

import { Console } from "@woowacourse/mission-utils";

//레이싱 컨트롤 알고리즘
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

  

  async traceMaker(randomArray) {
    this.#scoreData = scoreAccumulator(this.#scoreData, randomArray); // 우승자 확인위해 게임 시작전 데이터 전송(누적)
    this.#traceData = TraceAccumulator(this.#traceData, randomArray); // 도로 로그 추가(누적)
      
    this.#traceData.forEach((element, index) => {

      Console.print(this.#playersArray[index] + ' : ' + element); 
    })


    this.#playTime++ //플레이타임 갱신
    if (this.#playTime === this.#attemptNumber) {
      return
    }  
    this.traceMaker(randomArrayGenerator(playersArray.length)) // 탈출못하면 재시작
  }
}

export default RacingController;