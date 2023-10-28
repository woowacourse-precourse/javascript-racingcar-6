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

  static #validate(value) {
    typeValidator.isArray(value);
    Cars.#validateType(value);
  }

  static #validateType(array) {
    const isCars = array.every((element) => element instanceof Car);
    if (!isCars) throw Error(ERROR_MESSAGE.notCars);
  }
}

export default Cars;
