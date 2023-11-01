import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, SYMBOL } from '../constants/Constants';
import ValidateAttempt from '../Validator/ValidateAttempt';
import ValidateCarName from '../Validator/ValidateCarName';

class UserInput {
  constructor() {
    this.validateCarName = new ValidateCarName();
    this.validateAttempt = new ValidateAttempt();
  }

  getCarName = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.carsName);

    const cars = input.split(SYMBOL.comma).map((v) => v.trim());
    this.validateCarName.isValid(cars);

    return cars;
  };

  getAttempts = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.attempt);
    this.validateAttempt.isValidAttempt(input);

    return input;
  };
}

export default UserInput;
