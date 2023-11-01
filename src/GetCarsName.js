import { Console } from '@woowacourse/mission-utils';
import { getCarsNameConstant } from './Constant.js';

class GetCarsName {
  #carsNameList;

  async getCarsNameString() {
    try {
      Console.print(getCarsNameConstant.GET_CARS_NAME_MESSAGE);
      const carsString = await Console.readLineAsync('');

      return carsString;
    } catch (e) {}
  }

  stringToList(carsString) {
    const carsList = carsString.split(',');

    return carsList;
  }

  validate(carsList) {
    carsList.forEach((name) => {
      if (name.length > 5) {
        throw new Error(getCarsNameConstant.NAME_LENGTH_LIMIT_ERROR);
      }
    });

    this.#carsNameList = carsList;
  }

  async getCarsNameList() {
    const carsString = await this.getCarsNameString();
    const carsList = this.stringToList(carsString);
    this.validate(carsList);

    return this.#carsNameList;
  }
}

// const a = new GetCarsName();
// a.getCarsNameList();

export default GetCarsName;
