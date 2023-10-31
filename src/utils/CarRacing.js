import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";
import CarList from "./CarList.js";
import User from "./User.js";

const CarRacing = {
  async playGame() {
    const [names, tryCount] = await User.beReady();

    const carList = new CarList(names);
    carList.race(tryCount);

    this.showResult(names, carList.positions);
  },

  showResult(nameList, moveList) {
    const winners = this.decideWinners(nameList, moveList);

    this.printWinners(winners);
  },

  decideWinners(nameList, moveList) {
    const winners = [];
    const maxForward = Math.max(...moveList);

    moveList.forEach((forward, index) => {
      if (forward === maxForward) {
        winners.push(nameList[index]);
      }
    });

    return winners;
  },

  printWinners(winnerList) {
    const finalWinners = winnerList.map((winner) => winner).join(", ");

    Console.print(`\n${IN_GAME_MESSAGE.finalWinner} ${finalWinners}`);
  },
};

export default CarRacing;
