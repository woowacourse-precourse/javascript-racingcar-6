import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './Message';
import { checkCarNameInput, checkTryNumType } from './Validation';

class Car {
  constructor(name) {
    this.name = name;
    this.progress = '';
  }
}

export async function getCarName() {
  const carName = await Console.readLineAsync(INPUT_MESSAGES.INPUT_CAR_NAME);
  checkCarNameInput(carName);
  carName.split(',').map((name) => new Car(name));
  return carName;
}

export async function getTryNum() {
  const tryNum = await Console.readLineAsync(INPUT_MESSAGES.INPUT_TRY_NUM);
  checkTryNumType(tryNum);
  return tryNum;
}
