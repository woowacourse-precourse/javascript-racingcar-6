import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './Message.js';
import { checkCarNameInput, checkTryNum } from './Validation.js';

class Car {
  constructor(name) {
    this.name = name;
    this.progress = [];
  }
}

export async function getCarName() {
  const carName = await Console.readLineAsync(INPUT_MESSAGES.INPUT_CAR_NAME);
  checkCarNameInput(carName);
  const carNameList = carName.split(',').map((name) => new Car(name));
  return carNameList;
}

export async function getTryNum() {
  const tryNum = await Console.readLineAsync(INPUT_MESSAGES.INPUT_TRY_NUM);
  checkTryNum(tryNum);
  return tryNum;
}
