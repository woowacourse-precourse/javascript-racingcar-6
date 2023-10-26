import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './Message.js';
import { checkCarNameInput, checkTryNumType } from './Validation.js';

export async function getCarName() {
  try {
    const carName = await Console.readLineAsync(INPUT_MESSAGES.INPUT_CAR_NAME);
    checkCarNameInput(carName);
    return carName.split(',').map(el => el = new Car(el));
  } catch (error) {
    throw error;
  }
}

export async function getTryNum() {
  try {
    const tryNum = await Console.readLineAsync(INPUT_MESSAGES.INPUT_TRY_NUM);
    checkTryNumType(tryNum);
    return tryNum;
  } catch (error) {
    throw error;
  }
}

class Car {
    constructor(name) {
        this.name = name;
        this.progress = '';
    }
}
