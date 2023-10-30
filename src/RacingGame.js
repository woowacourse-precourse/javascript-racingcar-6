import RacingStadium from './RacingStadium.js';
import GameUtils from './utils/GameUtils.js';

class RacingGame {
  #racingStadium;

  constructor() {
    this.#racingStadium = new RacingStadium();
  }

  start() {
    return this;
  }

  prepareRacingCarsInStadium(cars) {
    this.#racingStadium.setRacingCars(cars);
  }

  startRacing(attemptNumber) {
    this.#racingStadium.repeatRacing(attemptNumber);
  }

  announceGameWinners() {
    const winners = this.#racingStadium.selectWinners();
    const isSoloWinner = winners.length <= 1;

    if (isSoloWinner) {
      GameUtils.printFinalWinner(winners);
      return;
    }

    GameUtils.printFinalWinners(winners);
  }

  end() {
    return this;
  }
}

export default RacingGame;
