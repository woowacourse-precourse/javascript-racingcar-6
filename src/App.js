import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./constants/constants.js";

class App {
  constructor() {
    this.cars = [];
    this.playTimes = 0;
  }

  async play() {
    const answer = await Console.readLineAsync(MESSAGE.start);
    this.cars = answer.split(",");
    if (this.CheckCarsName()) {
      const playTimes = await Console.readLineAsync(MESSAGE.roundsToPlay);
      this.playTimes = playTimes;
      if (this.CheckPlayTimes()) {
        this.StartRacing();
      } else {
        throw new Error(MESSAGE.notValidPlaytimes);
      }
    } else {
      throw new Error(MESSAGE.notValidCarsName);
    }
  }

  CheckCarsName() {
    if (this.cars.length > 10 || this.cars.length < 2) return false;

    const hasNotSpace = (car) => !car.includes(" ");
    const isNotSpace = (car) => car.length !== 0;
    const checkFive = (car) => car.length <= 5;

    const isValidate = this.cars.every(
      (car) => hasNotSpace(car) && isNotSpace(car) && checkFive(car)
    );

    return isValidate;
  }

  CheckPlayTimes() {
    const hasNotSpace = (number) => !number.includes(" ");
    const checkUnderTen = /^(10|[1-9])$/;

    if (!checkUnderTen.test(this.playTimes) || !hasNotSpace(this.playTimes)) {
      return false;
    }
    return true;
  }

  StartRacing() {
    let count = 1;
    const cars = this.cars.reduce((acc, cur) => {
      acc[cur] = "";
      return acc;
    }, {});

    while (count <= this.playTimes) {
      this.cars.map((car) => {
        if (this.CanMoveForward()) {
          cars[car] += "-";
        }
        return Console.print(`${car} : ${cars[car]}`);
      });
      count += 1;
    }
    return cars;
  }

  CanMoveForward() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      return true;
    }
    return false;
  }
}

export default App;
