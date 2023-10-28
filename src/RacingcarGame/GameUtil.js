import { MissionUtils } from '@woowacourse/mission-utils';
import { ErrorMessage } from '../message';

class GameUtil {
  carNameVaildator(car) {
    if (car.length > 5) {
      throw new Error(ErrorMessage.CAR_NAME_LENGTH);
    }
  }

  attemptsValidator(attempts) {
    if (attempts <= 0) {
      MissionUtils.Console.print(ErrorMessage.ATTEMPTS_VALID_NUM);
      throw new Error(ErrorMessage.ATTEMPTS_VALID_NUM);
    }
  }
}

export default GameUtil;
