import Racer from './Racer.js';
import {
  inputCarNames,
  inputTryCount,
  outputResultsEveryIteration,
} from './View.js';

class App {
  async play() {
    const carNames = await inputCarNames();
    const tryCount = await inputTryCount();
    const racers = this.runRace(carNames, tryCount);
  }

  runRace(carNames, tryCount) {
    const racers = carNames.map(carName => new Racer(carName));
    for (let i = 0; i < tryCount; i += 1) {
      racers.forEach(racer => racer.moveForward());
      outputResultsEveryIteration(racers);
    }
    return racers;
  }
}

export default App;
