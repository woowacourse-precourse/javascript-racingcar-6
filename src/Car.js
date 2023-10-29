import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './Constants.js';
import { checkCarNameInput, checkTryNum } from './Validation.js';

class Car {
  constructor(name) {
    this.name = name;
    this.progress = [];
  }
}

export async function getCarNameList() {
  const carName = await Console.readLineAsync(INPUT_MESSAGES.inputCarName);
  checkCarNameInput(carName);
  const carNameList = carName.split(',').map((name) => new Car(name));
  return carNameList;
}

export async function getTryNum() {
  const tryNum = await Console.readLineAsync(INPUT_MESSAGES.inputTryNum);
  checkTryNum(tryNum);
  return tryNum;
}
