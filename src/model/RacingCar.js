import MESSAGE from "../constants/message";
import generateNumber from "../utils/generateNumber";
import SETTING from "../constants/setting";

class RacingCar {
  constructor() {
    this.result = [];
    this.winner = [];
  }

  setResult(names) {
    this.result = names.map((name) => [name, ""]);
  }

  getResult() {
    return this.result;
  }

  carMove() {
    this.result.forEach((player) => {
      const randomNumber = generateNumber(
        SETTING.MIN_RANDOM_NUMBER,
        SETTING.MAX_RANDOM_NUMBER
      );
      if (randomNumber >= SETTING.FORWARD) player[1] += "-";
    });
  }

  getMaxPoint() {
    const points = this.result.map(([, point]) => point.length);
    return Math.max(...points);
  }

  getWinner() {
    return `${MESSAGE.WINNER} : ${this.winner.join(", ")}`;
  }

  calWinner() {
    const maxPoint = this.getMaxPoint();
    this.winner = this.result
      .filter(([, point]) => point.length === maxPoint)
      .map(([name]) => name);
  }
}

export default RacingCar;
