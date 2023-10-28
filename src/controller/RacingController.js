import { scoreAccumulator, traceAccumulator } from "../util/Accumulator.js";
import { randomArrayGenerator } from "../util/RandomArrayGenerator.js";
import Converter from "../util/Converter.js";
import { Console } from "@woowacourse/mission-utils";
import { findWinner } from "./FindeWinner.js";
import { GAME_MESSEAGE } from "../constants/Messeage.js";

class RacingController {  
  playersArray;
  attemptNumber;

  scoreArray = [];
  traceArray = [];
  playTime = 0;

  constructor(playersArray, attemptNumber) {
    this.playersArray = playersArray;
    this.attemptNumber = attemptNumber;
  }

  startRacing(randomArray) {
    this.scoreArray = Converter.scoreFilter(randomArray); 
    this.traceArray = Converter.traceFilter(randomArray);

    Console.print(GAME_MESSEAGE.executeResult);
    this.traceMaker();
    
  }

  traceMaker() {                                          
    this.traceArray.forEach((element, index) => {
      Console.print(this.playersArray[index] + ' : ' + element);
    })  
    Console.print('');

    this.playTime++;

    if (this.playTime === this.attemptNumber) {
      const result = findWinner(this.playersArray, this.scoreArray);

      return Console.print(`${GAME_MESSEAGE.winner} : ${result.join(', ')}`);
    }
    
    this.updateRacingBoard(); 
  }

  updateRacingBoard() {                                          
    const newRandomArray = randomArrayGenerator(this.playersArray.length);
    
    this.scoreArray = scoreAccumulator(this.scoreArray, newRandomArray);
    this.traceArray = traceAccumulator(this.traceArray, newRandomArray);

    this.traceMaker(); 
  }
}

export default RacingController;

/*
const a  = new RacingController(['pobi','crong','woong'],20);
a.startRacing([3,4,5]);
*/
