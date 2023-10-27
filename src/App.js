import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./constants/constants.js";

class App {
  constructor() {
    this.cars = [];
    this.playTimes = 0;
    this.winner = [];
    this.randomNumber = 0;
    this.racingCars = {};
  }

  async play() {
    const answer = await Console.readLineAsync(MESSAGE.start);
    this.cars = answer.split(",");
    if (this.CheckCarsName()) {
      const playTimes = await Console.readLineAsync(MESSAGE.roundsToPlay);
      this.playTimes = playTimes;
      if (this.CheckPlayTimes()) {
        return this.StartRacing();
      }
      throw new Error(MESSAGE.notValidPlaytimes);
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
      (car) => hasNotSpace(car) && isNotSpace(car) && checkFive(car),
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
    this.racingCars = this.cars.reduce((acc, cur) => {
      acc[cur] = "";
      return acc;
    }, {});
    Console.print(MESSAGE.result);
    while (count <= this.playTimes) {
      this.cars.map((car) => {
        if (this.CanMoveForward()) {
          this.racingCars[car] += "-";
        }
        return Console.print(`${car} : ${this.racingCars[car]}`);
      });
      Console.print("\n");
      count += 1;
    }
    this.WhoIsWinner();
  }

  CanMoveForward() {
    this.randomNumber = Random.pickNumberInRange(0, 9);
    if (this.randomNumber >= 4) {
      return true;
    }
    return false;
  }

  WhoIsWinner() {
    const scores = Object.values(this.racingCars);
    const cars = Object.keys(this.racingCars);
    const scoreNumbers = scores.map((score) => score.length);
    let maxNumber = 0;
    let winner = "";
    scoreNumbers.forEach((scoreNumber, index) => {
      if (scoreNumber > maxNumber) {
        winner = cars[index];
        maxNumber = scoreNumber;
      } else if (scoreNumber === maxNumber) {
        winner += `,${cars[index]}`;
      }
    });
    Console.print(`${MESSAGE.winner} ${winner}`);
  }
}

export default App;
