import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import strings from './constants.js';
class CreateCarName {
  constructor() {
    this.carNameArr = [];
    this.carArr = [];
  }

  carName(inputName) {
    const inputNameArr = inputName.split(',');

    inputNameArr.forEach((inputNameElement) => {
      this.wrongName(inputNameElement);
    });

    Console.print(this.carNameArr.join(','));

    this.carNameArr.forEach((element) => {
      this.carArr.push(new Car(element));
    });

    return this.carArr;
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

    return this.carNameArr.push(inputNameElement);
  }
}
export default CreateCarName;
