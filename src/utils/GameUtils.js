import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';
import ConsoleOutput from '../io/ConsoleOutput.js';
import {
  MIN_NUMBER_TO_MOVING_FORWARD,
  RANDOM_MIN_NUM,
  RANDOM_MAX_NUM,
  DASH,
} from '../constants/Enum.js';

class GameUtils {
  static generateRandomNumberFromZeroToNine() {
    return Number(
      MissionUtils.Random.pickNumberInRange(RANDOM_MIN_NUM, RANDOM_MAX_NUM),
    );
  }

  static printCarNameAndRandomNumber(carName, randomNumber) {
    ConsoleOutput.output(`${carName} : ${GameUtils.getDash(randomNumber)}`);
  }

  static getDash(randomNumber) {
    const totalDash = '';

    return totalDash.padEnd(randomNumber, DASH);
  }

  static isMovingForward(randomNumber) {
    return randomNumber >= MIN_NUMBER_TO_MOVING_FORWARD;
  }

  static getHighestScore(racingCars) {
    const accumulatedForwardByCar = racingCars.map((car) =>
      car.getAccumulatedForward(),
    );

    return Math.max(...accumulatedForwardByCar);
  }

  static findWinners(racingCars, highestScore) {
    const winners = racingCars.filter(
      (car) => car.getAccumulatedForward() === highestScore,
    );

    return winners;
  }

  static printFinalWinner(winner) {
    ConsoleOutput.output(`${MESSAGE.FINAL_WINNERS} : ${winner}`);
  }

  static printFinalWinners(winners) {
    ConsoleOutput.output(`${MESSAGE.FINAL_WINNERS} : ${winners.join(', ')}`);
  }
}

export default GameUtils;
