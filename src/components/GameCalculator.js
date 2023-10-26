import RandomNumberGenerator from './RandomNumberGenerator.js';

class GameCalculator {
  constructor(userInputCars, userInputTryCount) {
    this.userInputCarsArr = userInputCars.split(',');
    this.userInputTryCount = userInputTryCount;
  }

  calculate() {
    const RANDOM_NUMBER_GENERATOR = new RandomNumberGenerator();
  }
}
