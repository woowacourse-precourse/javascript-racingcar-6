import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

export async function validateCarNames(carNames) {
  if (carNames.some((name) => name.length > 5)) {
    throw new Error(MESSAGE.ERROR_CAR_NAME_LENGTH_INPUT_WRONG);
  }

  const set = new Set(carNames);
  if (set.size !== carNames.length) {
    throw new Error(MESSAGE.ERROR_CAR_NAMES_DUPLICATION_INPUT_WRONG);
  }

  if (carNames.length === 1) {
    throw new Error(MESSAGE.ERROR_CAR_NAME_COMMA_INPUT_WRONG);
  }
}

export async function validateTryNumber(tryNumberInput) {
  const regex = /^\d+$/;
  if (!regex.test(tryNumberInput)) {
    throw new Error(MESSAGE.ERROR_TRY_NUMBER_INPUT_WRONG);
  }
}

class User {
  constructor() {
    this.carNames = [];
    this.tryNumber = 0;
  }

  async getCarNames() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        MESSAGE.CAR_NAMES_INPUT,
      );
      const carNames = input.split(',').map((name) => name.trim());
      validateCarNames(carNames);
      this.carNames = carNames;
    } catch (error) {
      console.error(error.message);
    }
  }

  async getTryNumber() {
    try {
      const tryNumberInput = await MissionUtils.Console.readLineAsync(
        MESSAGE.TRY_NUMBER_INPUT,
      );
      validateTryNumber(tryNumberInput);
      this.tryNumber = parseInt(tryNumberInput);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default User;
