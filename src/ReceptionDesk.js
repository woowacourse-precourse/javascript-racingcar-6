import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { INPUT_CARS } from './constants/messages.js';

class ReceptionDesk {
  static async recruitCars() {
    const input = await Console.readLineAsync(INPUT_CARS);
    return this.makeCarList(input);
  }

  makeCarList(input) {
    const nameList = input.replaceAll(' ', '').split(',');
    const cars = [];
    nameList.forEach((name) => {
      cars.push(new Car(name));
    });
    return cars;
  }
}

export default ReceptionDesk;
