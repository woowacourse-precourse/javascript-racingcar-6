import { ErrorMessage } from "../Message";

class GameUtil {
  carNameVaildator(car) {
    if (car.length > 5) {
      throw new Error(ErrorMessage.CAR_NAME_LENGTH);
    }
  }

  attemptsValidator(attempts) {
    if (attempts <= 0) {
      throw new Error(ErrorMessage.ATTEMPTS_VALID_NUM);
    }
    if (/\D/.test(attempts)) {
      throw new Error(ErrorMessage.ATTEMPTS_TYPE);
    }
  }
}

export default GameUtil;
