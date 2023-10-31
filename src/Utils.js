import { Random } from "@woowacourse/mission-utils";
import Car from "./Car";
import { SEPARATOR, RANDOM } from "./constant/rule";

class Utils {
  static getCarNameArray(enteredCars) {
    return enteredCars.split(SEPARATOR.CARS.SYMBOL).map((car) => car.trim());
  }

  static getEachCarInstanceArray(cars) {
    return cars.map((carName) => new Car(carName));
  }

  static getRandomNumber() {
    return Random.pickNumberInRange(RANDOM.MIN_RANGE, RANDOM.MAX_RANGE);
  }
}

export default Utils;
