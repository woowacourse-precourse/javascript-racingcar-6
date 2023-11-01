import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../const/messages.js";

class Judge {
  judgeWinner(currentCars) {
    const highestScore = Math.max(...Object.values(currentCars));
    let winner = Object.keys(currentCars).filter((car) => currentCars[car] === highestScore).join(', ');
    this.printWinner(winner);
  }

  printWinner(winner) {
    Console.print(`${MESSAGES.finalWinner}${winner}`);
  }
}

export default Judge;