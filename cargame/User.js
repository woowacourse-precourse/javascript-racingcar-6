import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import { validateCarNames } from '../validates/carNames.js';
import { validateTryNumber } from '../validates/tryNumber.js';

class User {
  constructor() {
    this.carNames = [];
    this.tryNumber = 0;
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      MESSAGE.CAR_NAMES_INPUT,
    );
    const carNames = input.split(',').map((name) => name.trim());
    validateCarNames(carNames);
    this.carNames = carNames;
  }

  async getTryNumber() {
    const tryNumberInput = await MissionUtils.Console.readLineAsync(
      MESSAGE.TRY_NUMBER_INPUT,
    );
    validateTryNumber(tryNumberInput);
    this.tryNumber = parseInt(tryNumberInput);
  }
}

export default User;
