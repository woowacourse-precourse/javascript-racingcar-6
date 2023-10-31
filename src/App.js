import { Console } from '@woowacourse/mission-utils';

import Racer from './Racer.js';
import {
  inputCarNames,
  inputTryCount,
  outputResultsEveryIteration,
  outputWinner,
} from './View.js';

class App {
  async play() {
    const carNames = await inputCarNames();
    const tryCount = await inputTryCount();
    Console.print('\n실행 결과');
    const racers = this.runRace(carNames, tryCount);
    outputWinner(racers);
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
