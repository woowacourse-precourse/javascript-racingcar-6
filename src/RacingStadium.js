import MESSAGE from './constants/Message.js';
import RacingCar from './domain/RacingCar.js';
import ConsoleOutput from './io/ConsoleOutput.js';
import GameUtils from './utils/GameUtils.js';

class RacingStadium {
  #racingCars;

  setRacingCars(cars) {
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

  repeatRacing(attemptNumber) {
    ConsoleOutput.output(MESSAGE.GAME_RESULT);

    Array.from({ length: attemptNumber }, () => this.tryOneAttempt());
  }

  tryOneAttempt() {
    const racingCars = this.getRacingCars();

    racingCars.map((racingCar) =>
      RacingStadium.proceedAttemptByRacingCar(racingCar),
    );

    RacingStadium.proceedNextAttempt();
  }

  static proceedAttemptByRacingCar(racingCar) {
    const randomNumber = GameUtils.generateRandomNumberFromZeroToNine();
    GameUtils.printCarNameAndRandomNumber(racingCar.getName(), randomNumber);

    const isMovingForwardBoolean = GameUtils.isMovingForward(randomNumber);

    if (isMovingForwardBoolean) {
      racingCar.moveForward();
    }
  }

  static proceedNextAttempt() {
    ConsoleOutput.output('');
  }

  selectWinners() {
    const racingCars = this.getRacingCars();

    const highestScore = GameUtils.getHighestScore(racingCars);

    const winners = GameUtils.findWinners(racingCars, highestScore);

    const winnersName = winners.map((winner) => winner.getName());

    return winnersName;
  }
}

export default RacingStadium;
