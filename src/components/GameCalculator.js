// import { Console } from '@woowacourse/mission-utils';
import RandomNumberGenerator from './RandomNumberGenerator.js';
import RaceManager from './RaceManager.js';

class GameCalculator {
  constructor(userInputCars, userInputTryCount) {
    this.userInputCarsArr = userInputCars.split(',');
    this.userInputTryCount = userInputTryCount;
    this.arrForRace = null;
    this.baseNumberForCalculate = 4;
  }

  calculate() {
    const RANDOM_NUMBER_GENERATOR = new RandomNumberGenerator(
      this.userInputTryCount,
      this.userInputCarsArr.length
    );
    this.arrForRace = RANDOM_NUMBER_GENERATOR.generateRandomNumber();
    // Console.print(this.arrForRace);
  }
}

export default GameCalculator;
