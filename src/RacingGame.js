import RacingStadium from './RacingStadium.js';
import RacingGameOutput from './view/RacingGameOutput.js';

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
    const winners = this.#racingStadium.getWinnersName();
    const isSoloWinner = winners.length <= 1;

    if (isSoloWinner) {
      RacingGameOutput.printFinalWinner(winners);
      return;
    }

    RacingGameOutput.printFinalWinners(winners);
  }

  end() {
    return this;
  }
}

export default RacingGame;
