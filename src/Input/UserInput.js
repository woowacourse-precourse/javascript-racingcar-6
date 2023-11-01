import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, SYMBOL } from '../Constants/Constants.js';
import ValidateAttempt from '../Validator/ValidateAttempt.js';
import ValidateCarName from '../Validator/ValidateCarName.js';

class UserInput {
  constructor() {
    this.validateCarName = new ValidateCarName();
    this.validateAttempt = new ValidateAttempt();
  }

  getCarName = async () => {
    const carName = await Console.readLineAsync(INPUT_MESSAGE.carNames);

    const carNames = carName.split(SYMBOL.comma).map((v) => v.trim());
    this.validateCarName.isValid(carNames);

    return carNames;
  };

  getAttempts = async () => {
    const attempt = await Console.readLineAsync(INPUT_MESSAGE.attempt);
    this.validateAttempt.isValidAttempt(attempt);

    return attempt;
  };
}

export default UserInput;
