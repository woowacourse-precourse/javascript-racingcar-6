import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/message.js';
import {
  validateUserInputEmpty,
  validateCarNameLength,
  validateCarNameDuplication,
  validateCarNameCount,
} from '../validates/carNames.js';
import { validateTryNumber } from '../validates/tryNumber.js';

class User {
  constructor() {
    this.carNames = [];
    this.tryNumber = 0;
  }

  async getCarNames() {
    const userInput = await MissionUtils.Console.readLineAsync(
      MESSAGES.CAR_NAMES_INPUT,
    );
    validateUserInputEmpty(userInput);

    const carNames = userInput.split(',').map((name) => name.trim());

    validateCarNameLength(carNames);
    validateCarNameDuplication(carNames);
    validateCarNameCount(carNames);

    this.carNames = carNames;
  }

  async getTryNumber() {
    const tryNumberInput = await MissionUtils.Console.readLineAsync(
      MESSAGES.TRY_NUMBER_INPUT,
    );
    validateTryNumber(tryNumberInput);
    this.tryNumber = parseInt(tryNumberInput);
  }
}

export default User;
