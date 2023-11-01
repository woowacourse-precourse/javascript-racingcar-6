import { Console, Random } from '@woowacourse/mission-utils';
import { IN_GAME_MESSAGE, IN_GAME_SETTING } from '../src/constants.js';
import { validateCarName } from '../validations/validateCarName.js';

class Car {
  constructor() {
    this.carList = {};
  }

  async initialize() {
    this.carList = await this.createCarObject();
  }

  filterInputCarNameList(carName) {
    return carName
      .split(',')
      .map((name) => name.trim())
      .filter((name) => name !== '');
  }

  carNameListToObject(carNameList) {
    return carNameList.reduce((object, name) => {
      object[name] = 0;
      return object;
    }, {});
  }

  async createCarObject() {
    const carName = await Console.readLineAsync(IN_GAME_MESSAGE.getInputCarName);
    const carNameList = this.filterInputCarNameList(carName);

    validateCarName(carNameList);

    const carList = await this.carNameListToObject(carNameList);
    return carList;
  }

  getCarListObject() {
    return this.carList;
  }

  moveCarPosition(carName) {
    this.carList[carName] += 1;
  }

  tryMovingCar() {
    const carList = this.getCarListObject();
    for (const carName in carList) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= IN_GAME_SETTING.moveCarForwardNumber) {
        this.moveCarPosition(carName);
      }
    }
  }

  printCarPosition() {
    const carList = this.getCarListObject();
    for (const carName in carList) {
      const carPosition = '-'.repeat(carList[carName]);
      Console.print(`${carName} : ${carPosition}`);
    }
    Console.print('');
  }
}

export default Car;
