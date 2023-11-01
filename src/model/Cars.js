import { ERROR_MESSAGE } from "../constants/messages.js";
import { typeValidator } from "../utils/validators.js";
import Car from "./Car.js";

class Cars {
  #cars = [];

  constructor(cars) {
    Cars.#validate(cars);
    this.#cars = cars;
  }

  moveAll() {
    return this.#cars.reduce((acc, car) => {
      const result = { ...acc };
      const carName = car.getName();
      const isMoved = car.move();
      result[carName] = isMoved;
      return result;
    }, {});
  }

  getCarNames() {
    return this.#cars.map((car) => car.getName());
  }

  getLength() {
    return this.#cars.length;
  }

  static #validate(value) {
    typeValidator.isArray(value);
    Cars.#validateIsCar(value);
    Cars.#validateNoDuplicateName(value);
  }

  static #validateIsCar(array) {
    const isCars = array.every((element) => element instanceof Car);

    if (!isCars) throw Error(ERROR_MESSAGE.notCars);
  }

  static #validateNoDuplicateName(cars) {
    const carNames = cars.map((car) => car.getName());

    if (carNames.length !== new Set(carNames).size) {
      throw Error(ERROR_MESSAGE.duplicateNames);
    }
  }
}

export default Cars;
