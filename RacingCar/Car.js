import { Console } from '@woowacourse/mission-utils';
import { IN_GAME_MESSAGE } from '../src/constants.js';
import { validateCarName } from '../validations/validateCarName.js';

class Car {
  constructor() {
    this.carList = {};
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

    this.carList = await this.carNameListToObject(carNameList);
    return this.carList;
  }
}

export default Car;
