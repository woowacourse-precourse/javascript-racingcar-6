import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP } from "../constants/GAME_HELP.js";
import Car from "./Car.js";
import MovingForward from "./MovingForward.js";

class Winner {
  constructor(car, movingForward) {
    this.car = car;
    this.movingForward = movingForward;
  }

  #getWinner() {
    const racingScore = this.movingForward.racingArray.map(
      (hyphen) => hyphen.length
    );
    const maxRacingScore = Math.max(...racingScore);
    const winnerRacers = [];

    racingScore.forEach((length, index) => {
      if (length === maxRacingScore) {
        winnerRacers.push(index);
      }
    });

    const winnerRacersName = [
      ...winnerRacers.map((index) => this.car.carNameList[index]),
    ];

    return winnerRacersName.join(", ");
  }

  showWinner() {
    Console.print(`${GAME_HELP.WINNER}${this.#getWinner()}`);
  }
}

export default Winner;
