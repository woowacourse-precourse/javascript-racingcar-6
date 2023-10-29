import { scoreAccumulator, traceAccumulator } from "../util/Accumulator.js";
import { randomArrayGenerator } from "../util/RandomArrayGenerator.js";
import Converter from "../util/Converter.js";
import { Console } from "@woowacourse/mission-utils";
import { findWinner } from "./FindeWinner.js";
import { GAME_MESSEAGE } from "../constants/Messeage.js";

class RacingController {  
  playersArray;
  attemptNumber;
  //레이싱 보드
  scoreArray = [];
  traceArray = [];
  playTime = 0;

  constructor(playersArray, attemptNumber) {
    this.playersArray = playersArray;
    this.attemptNumber = attemptNumber;
  }

  startRacing() {
    const driveArray = this.driveRandomArray();
    this.scoreArray = Converter.scoreFilter(driveArray); 
    this.traceArray = Converter.traceFilter(driveArray);

    Console.print(GAME_MESSEAGE.executeResult);

    this.traceMaker();
  }

  traceMaker() {                                          
    this.traceArray.forEach((trace, index) => Console.print(this.playersArray[index] + ' : ' + trace));   
    Console.print('');

    this.playTime += 1;
    if (this.playTime === this.attemptNumber) return this.showWinners();
    
    this.updateRacingBoard(); 
  }

  updateRacingBoard() {                                          
    this.scoreArray = scoreAccumulator(this.scoreArray, this.driveRandomArray());
    this.traceArray = traceAccumulator(this.traceArray, this.driveRandomArray());

    this.traceMaker(); 
  }

  driveRandomArray() {
    return randomArrayGenerator(this.playersArray.length);
  }
  
  showWinners() {
    const winners = findWinner(this.playersArray, this.scoreArray);
    Console.print(`${GAME_MESSEAGE.winner} : ${winners.join(', ')}`);
  }
}

export default RacingController;

/*
const a  = new RacingController(['pobi','crong','woong'],20);
a.startRacing([3,4,5]);
*/
