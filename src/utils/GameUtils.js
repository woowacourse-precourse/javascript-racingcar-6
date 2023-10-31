import { MissionUtils } from '@woowacourse/mission-utils';
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

  static getDash(randomNumber) {
    const totalDash = '';

    return totalDash.padEnd(randomNumber, DASH);
  }

  static isMovingForward(randomNumber) {
    return randomNumber >= MIN_NUMBER_TO_MOVING_FORWARD;
  }

  static selectWinners(racingCars) {
    const highestScore = GameUtils.getHighestScore(racingCars);
    const winners = GameUtils.findWinners(racingCars, highestScore);
    const winnersName = winners.map((winner) => winner.getName());

    return winnersName;
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
}

export default GameUtils;
