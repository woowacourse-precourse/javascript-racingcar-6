import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';
import ConsoleOutput from '../io/ConsoleOutput.js';
import { MIN_NUMBER_TO_MOVING_FORWARD } from '../constants/Enum.js';

class GameUtils {
  static repeatRacing(attemptNumber, racingGame) {
    ConsoleOutput.output(MESSAGE.GAME_RESULT);

    Array.from({ length: attemptNumber }, () =>
      GameUtils.tryOneAttempt(racingGame),
    );
  }

  static tryOneAttempt(racingGame) {
    const racingCars = racingGame.getRacingCars();

    racingCars.map((racingCar) =>
      GameUtils.proceedAttemptByRacingCar(racingCar),
    );

    GameUtils.proceedNextAttempt();
  }

  static generateRandomNumberFromZeroToNine() {
    return Number(MissionUtils.Random.pickNumberInRange(0, 9));
  }

  static printCarNameAndRandomNumber(carName, randomNumber) {
    ConsoleOutput.output(`${carName} : ${GameUtils.getDash(randomNumber)}`);
  }

  static getDash(randomNumber) {
    const totalDash = [];
    Array.from({ length: randomNumber }, () => totalDash.push('-'));

    return totalDash.join('');
  }

  static proceedAttemptByRacingCar(racingCar) {
    const randomNumber = GameUtils.generateRandomNumberFromZeroToNine();
    GameUtils.printCarNameAndRandomNumber(racingCar.getName(), randomNumber);

    const isMovingForwardBoolean = GameUtils.isMovingForward(randomNumber);

    if (isMovingForwardBoolean) {
      racingCar.moveForward();
    }
  }

  static isMovingForward(randomNumber) {
    return randomNumber >= MIN_NUMBER_TO_MOVING_FORWARD;
  }

  static proceedNextAttempt() {
    ConsoleOutput.output('');
  }

  static selectWinners(cars) {
    const accumulatedForwardByCar = cars.map((car) =>
      car.getAccumulatedForward(),
    );

    const highestAccumulatedForward = Math.max(...accumulatedForwardByCar);

    const winners = cars.filter(
      (car) => car.getAccumulatedForward() === highestAccumulatedForward,
    );

    const winnersName = winners.map((winner) => winner.getName());

    return winnersName;
  }
}

export default GameUtils;
