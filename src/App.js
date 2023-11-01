import Racer from './Racer.js';
import { input, output } from './IO.js';

class App {
  async play() {
    const carNames = await input.carNames();
    const tryCount = await input.tryCount();
    const racers = this.runRace(carNames, tryCount);
    const winnerNames = this.getWinnerNames(racers);
    output.winners(winnerNames);
  }

  runRace(carNames, tryCount) {
    output.executionResult();
    const racers = carNames.map(carName => new Racer(carName));
    for (let i = 0; i < tryCount; i += 1) {
      racers.forEach(racer => racer.moveForward());
      output.statesEveryIteration(racers);
    }
    return racers;
  }

  getWinnerNames(racers) {
    const maxMove = Math.max(...racers.map(racer => racer.move));
    const winningRacers = racers.filter(racer => racer.move === maxMove);
    const winnerNames = winningRacers.map(racer => racer.carName);
    return winnerNames;
  }
}

export default App;
