import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { SEPARATOR, RANDOM } from "./constant/rule.js";

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

  static getRandomNumber() {
    const num = Random.pickNumberInRange(RANDOM.MIN_RANGE, RANDOM.MAX_RANGE);
    return num;
  }
}

export default Utils;
