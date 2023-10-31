import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP } from "../constants/GAME_HELP.js";
import Car from "./Car.js";
import Forward from "./Forward.js";

class Winner {
  constructor(car, forward) {
    this.car = car;
    this.forward = forward;
  }

  getWinner() {
    const racingScore = this.forward.racingArray.map((x) => x.length);
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
    Console.print(`${GAME_HELP.WINNER}${this.getWinner()}`);
  }
}

export default Winner;
