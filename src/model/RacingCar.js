import MESSAGE from "../constants/message";
import generateNumber from "../utils/generateNumber";
import SETTING from "../constants/setting";
import Car from "./Car";

class RacingCar {
  constructor() {
    this.result = [];
    this.winner = [];
  }

  setResult(names) {
    this.result = names.map((name) => new Car(name, ""));
  }

  getResult() {
    return this.result;
  }

  carMove() {
    this.result.forEach((car) => {
      const randomNumber = generateNumber(
        SETTING.MIN_RANDOM_NUMBER,
        SETTING.MAX_RANDOM_NUMBER
      );
      if (randomNumber >= SETTING.FORWARD) car.point += "-";
    });
  }

  getMaxPoint() {
    const points = this.result.map((car) => car.point.length);
    return Math.max(...points);
  }

  getWinner() {
    return `${MESSAGE.WINNER} : ${this.winner.join(", ")}`;
  }

  calWinner() {
    const maxPoint = this.getMaxPoint();
    this.result.forEach((car) => {
      if (car.point.length == maxPoint) {
        this.winner.push(car.name);
      }
    });
  }
}

export default RacingCar;
