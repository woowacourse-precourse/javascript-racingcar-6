import ERROR_MESSAGE from '../constants/errorMessage';
import messagePrinter from '../utils/messagePrinter';

class Car {
  #car;

  constructor(car) {
    this.#car = car;
    this.validate();
  }

  validate() {
    this.validateCarNameLength();
  }

  validateCarNameLength() {
    if (this.#car.length > 5) {
      messagePrinter.errorPrint(ERROR_MESSAGE.more_than_five_letters);
    } else if (this.#car.length === 0) {
      messagePrinter.errorPrint(ERROR_MESSAGE.no_letters);
    }
  }

  getCar() {
    return this.#car;
  }
}

export default Car;
