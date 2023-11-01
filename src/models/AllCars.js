import ERROR_MESSAGE from '../constants/errorMessage.js';
import messagePrinter from '../utils/messagePrinter.js';
import Car from './Car.js';

class AllCars {
  #cars;

  constructor(cars) {
    this.#cars = cars;
    this.validate();
  }

  validate() {
    this.validateCarNameLength();
    this.validateDuplication();
  }

  validateCarNameLength() {
    const carArray = this.#cars.map((carName) => {
      const car = new Car(carName);
      return car.getCar();
    });

    this.#cars = carArray;
  }

  validateDuplication() {
    if (this.#cars.length !== new Set([...this.#cars]).size) {
      messagePrinter.errorPrint(ERROR_MESSAGE.duplicated_car_names);
    }
  }

  getCars() {
    return this.#cars;
  }
}

export default AllCars;