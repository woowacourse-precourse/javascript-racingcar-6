import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';
import ConsoleOutput from '../io/ConsoleOutput.js';
import { MIN_NUMBER_TO_MOVING_FORWARD } from '../constants/Enum.js';

class GameUtlis {
  static repeatRacing(attemptNumber, racingGame) {
    ConsoleOutput.output(MESSAGE.GAME_RESULT);

    Array.from({ length: attemptNumber }, () => racingGame.tryOneAttempt());
  }

  static generateRandomNumberFromZeroToNine() {
    return Number(MissionUtils.Random.pickNumberInRange(0, 9));
  }

  static printCarNameAndRandomNumber(carName, randomNumber) {
    ConsoleOutput.output(`${carName} : ${GameUtlis.getDash(randomNumber)}`);
  }

  static getDash(randomNumber) {
    const totalDash = [];
    Array.from({ length: randomNumber }, () => totalDash.push('-'));

    return totalDash.join('');
  }

  static proceedAttemptByRacingCar(racingCar) {
    const randomNumber = GameUtlis.generateRandomNumberFromZeroToNine();
    GameUtlis.printCarNameAndRandomNumber(racingCar.getName(), randomNumber);

    const isMovingForwardBoolean = GameUtlis.isMovingForward(randomNumber);

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
}

export default GameUtlis;
