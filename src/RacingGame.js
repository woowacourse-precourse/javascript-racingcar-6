import RacingCar from './domain/RacingCar.js';
import GameUtils from './utils/GameUtils.js';

class RacingGame {
  #racingCars;

  start() {
    return this;
  }

  generateRacingCars(cars) {
    const racingCars = [];

    cars.forEach((car) => {
      const newCar = new RacingCar(car);
      racingCars.push(newCar);
    });

    this.#racingCars = racingCars;
  }

  getRacingCars() {
    return this.#racingCars;
  }

  startRacing(attemptNumber) {
    GameUtils.repeatRacing(attemptNumber, this);
  }

  announceGameWinners() {
    const winners = GameUtils.selectWinners(this.#racingCars);
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
