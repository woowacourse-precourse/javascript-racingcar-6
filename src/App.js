import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constants/constants.js";

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    const answer = await Console.readLineAsync(MESSAGE.start);
    this.cars = answer.split(",");
  }

  CheckCarsName() {
    if (this.cars.length > 10 || this.cars.length < 2) return false;

    const hasNotSpace = (car) => !car.includes(" ");
    const isNotSpace = (car) => car.length !== 0;
    const checkFive = (car) => car.length >= 5;

    const isValidate = this.cars.every(
      (car) => hasNotSpace(car) && isNotSpace(car) && checkFive(car)
    );

    return isValidate;
  }
}

export default App;
