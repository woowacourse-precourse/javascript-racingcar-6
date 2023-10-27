import Is from './Is.js';

class Get {
  static didItRun(numberOfGame, numberOfCar) {
    return new Array(numberOfCar)
      .fill(null)
      .map(() => new Array(numberOfGame).fill(Is.running()));
  }

  static position(runList, count) {
    return runList.reduce((previous, running, index) => {
      if (index <= count && running) return previous + 1;
      else return previous;
    }, 0);
  }
}

export default Get;
