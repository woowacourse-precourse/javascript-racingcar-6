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
    const input = await Console.readLineAsync(INPUT_MESSAGE.carNames);

    const carNames = input.split(SYMBOL.comma).map((carName) => carName.trim());
    this.validateCarName.isValidCarNames(carNames);

    return carNames;
  };

  getAttempts = async () => {
    const attempt = await Console.readLineAsync(INPUT_MESSAGE.attempt);
    this.validateAttempt.isValidAttempt(attempt);

    return attempt;
  };
}

export default UserInput;
