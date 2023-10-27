import Car from "./Car.js";
import { SEPARATOR } from "./constant/rule.js";

class Utils {
  static getCarNameArray(enteredCars) {
    const cars = enteredCars
      .split(SEPARATOR.CARS.SYMBOL)
      .map((car) => car.trim());

    return cars;
  }

  static getEachCarInstanceArray(cars) {
    const carInstanceArray = cars.map((carName) => new Car(carName));
    return carInstanceArray;
  }
}

export default Utils;
