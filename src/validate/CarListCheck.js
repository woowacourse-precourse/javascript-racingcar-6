import { ERROR, RANGE_NUMBER } from '../util/constants.js';

class CarListCheck {
  validate(inputCarList) {
    try {
      const carList = inputCarList.split(',');
      this.checkCarList(carList, inputCarList);
      return carList;
    } catch (error) {
      throw error;
    }
  }

  checkCarList(carList, inputCarList) {
    this.checkSameName(carList);
    this.checkNoInput(inputCarList);
    carList.forEach(carName => this.checkNameLength(carName));
  }

  checkNoInput(inputCarList) {
    if (inputCarList.length === 0) {
      throw ERROR.noInputCarList;
    }
  }

  checkSameName(carList) {
    const removeSameNameCount = new Set(carList).size;
    if (removeSameNameCount !== carList.length) {
      throw ERROR.sameName;
    }
  }

  checkNameLength(carName) {
    if (carName.length > RANGE_NUMBER.carNameLength) {
      throw ERROR.carNameLength;
    }
  }
}

export default CarListCheck;
