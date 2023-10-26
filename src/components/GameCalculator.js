import RandomNumberGenerator from './RandomNumberGenerator.js';

class GameCalculator {
  constructor(userInputCars, userInputTryCount) {
    this.userInputCarsArr = userInputCars.split(',');
    this.userInputTryCount = userInputTryCount;
    this.randomNumberArr = null;
  }

  calculate() {
    const RANDOM_NUMBER_GENERATOR = new RandomNumberGenerator(
      this.userInputTryCount
    );
    this.randomNumberArr = RANDOM_NUMBER_GENERATOR.generateRandomNumber();
  }
}

export default GameCalculator;
