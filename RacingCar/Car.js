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
}

export default Car;
