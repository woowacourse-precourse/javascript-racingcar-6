import { Console } from "@woowacourse/mission-utils";
import { scoreAccumulator, traceAccumulator } from "../util/Accumulator.js";
import Converter from "../util/Converter.js";
import { findWinner } from "../util/FindWinner.js";
import { randomArrayGenerator } from "../util/RandomArrayGenerator.js";
import { GAME_MESSEAGE } from "../constants/Messeage.js";
import { GAME_RULE } from "../constants/Constants.js";

class RacingController {  
  #playersArray;

  #attemptNumber;
  
  #scoreArray = [];

  #traceArray = [];

  #playTime = 0;
  
  constructor(playersArray, attemptNumber) {
    this.#playersArray = playersArray;
    this.#attemptNumber = attemptNumber;
  }

  startRacing() {
    const randomRacingArray = this.#makeRandomArray();
    this.#scoreArray = Converter.scoreFilter(randomRacingArray); 
    this.#traceArray = Converter.traceFilter(randomRacingArray);

    Console.print(GAME_MESSEAGE.executeResult);
    this.#traceMaker();
  }

  #traceMaker() {                                         
    this.#traceArray.forEach((trace, index) => Console.print(this.#playersArray[index] + GAME_RULE.colon + trace));   
    Console.print('');

    this.#playTime += 1;
    if (this.#playTime === this.#attemptNumber) return this.#showWinners();

    this.#updateRacingBoard(); 
  }

  #updateRacingBoard() {       
    const newRandomRaingArray = this.#makeRandomArray();                                   
    this.#scoreArray = scoreAccumulator(this.#scoreArray, newRandomRaingArray);
    this.#traceArray = traceAccumulator(this.#traceArray, newRandomRaingArray);

    this.#traceMaker(); 
  }

  #makeRandomArray() {
    return randomArrayGenerator(this.#playersArray.length);
  }
  
  #showWinners() {
    const winners = findWinner(this.#playersArray, this.#scoreArray);
    Console.print(`${GAME_MESSEAGE.winner} : ${winners.join(', ')}`);
  }
}

export default RacingController;
