import CustomError from '../CustomError/CustomError.js';

export default class Validator {
  #MAXIMUM_CHARACTAR = 5;

  checkValidCarsName(carNames) {
    carNames.forEach((car) => this.checkStringLength(car));
  }

  checkStringLength(string) {
    if (string.length > this.#MAXIMUM_CHARACTAR) {
      throw new Error(CustomError.NOT_OVER_FIVE_CHARACTER);
    } else return true;
  }
}
