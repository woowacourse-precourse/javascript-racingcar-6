import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import strings from './constants.js';

class CreateCarName {
  constructor() {
    this.carNameArray = [];
    this.carArray = [];
  }

  carName(inputName) {
    const inputNameArray = inputName.split(',');

    inputNameArray.forEach((inputNameElement) => {
      this.wrongName(inputNameElement);
    });

    Console.print(this.carNameArray.join(','));

    this.carNameArray.forEach((element) => {
      this.carArray.push(new Car(element));
    });

    return this.carArray;
  }

  wrongName(inputNameElement) {
    if (inputNameElement === '') {
      throw new Error(strings.ERROR_MESSAGE_NAME_NULL);
    }

    if (inputNameElement.length > 5) {
      throw new Error(strings.ERROR_MESSAGE_NAME_LIMIT);
    }

    if (/[^a-z]/i.test(inputNameElement)) {
      throw new Error(strings.ERROR_MESSAGE_NAME_STRING);
    }

    return this.carNameArray.push(inputNameElement);
  }
}
export default CreateCarName;
