import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { INPUT_CARS } from './constants/messages.js';

class ReceptionDesk {
  static async registerRacingCars() {
    const input = await Console.readLineAsync(INPUT_CARS);
    const nameList = this.createNameList(input);
    const cars = this.createCarList(nameList);
    return cars;
  }

  static createCarList(nameList) {
    return nameList.map((name) => new Car(name));
  }

  static createNameList(input) {
    return input.replaceAll(' ', '').split(',');
  }
}

export default ReceptionDesk;
