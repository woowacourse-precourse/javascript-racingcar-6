import Is from './Is.js';

class Get {
  static didItRun(numberOfGame, numberOfCar) {
    return new Array(numberOfGame)
      .fill(null)
      .map(() => new Array(numberOfCar).fill(Is.running()));
  }

  static position(runList, count) {
    return runList.reduce((previous, running, index) => {
      if (index <= count && running) return previous++;
      else previous;
    }, 0);
  }
}

export default Get;
