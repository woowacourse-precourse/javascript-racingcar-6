import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './Message.js';

export async function getCarName() {
  try {
    const carName = await Console.readLineAsync(INPUT_MESSAGES.INPUT_CAR_NAME);
    return carName.split(',').map(el => el = new Car(el));
  } catch (error) {
    throw error;
  }
}

export async function getTryNum() {
  try {
    const tryNum = await Console.readLineAsync(INPUT_MESSAGES.INPUT_TRY_NUM);
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



/* const input = "pobi,woni";
const num = '1';

console.log(input.split(',').map(el => el = new Car(el))[0].progress += '-');
console.log(input); */