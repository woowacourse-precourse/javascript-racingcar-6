import Is from './Is.js';

class Get {
  didItRun(numberOfGame, numberOfCar) {
    return new Array(numberOfGame)
      .fill(null)
      .map(() => new Array(numberOfCar).fill(Is.running()));
  }
}
