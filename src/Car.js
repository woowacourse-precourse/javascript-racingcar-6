import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './Message.js';

async function getCarName() {
  try {
    const carName = await Console.readLineAsync(INPUT_MESSAGES.INPUT_CAR_NAME);
    const participantList = carName.split(',').map(el => el = new Car(el));
  } catch (error) {
    // reject 되는 경우
  }
}

async function getTryNum() {
  try {
    const tryNum = await Console.readLineAsync(INPUT_MESSAGES.INPUT_TRY_NUM);
  } catch (error) {
    // reject 되는 경우
  }
  return tryNum;
}

class Car {
    constructor(name) {
        this.name = name;
        this.progress = '';
    }
}

const input = "pobi,woni";
const num = '1';

console.log(input.split(',').map(el => el = new Car(el)));
console.log(input);