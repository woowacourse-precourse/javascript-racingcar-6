import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";
import CarList from "./CarList.js";
import User from "./User.js";

const CarRacing = {
  async playGame() {
    const [names, tryCount] = await User.readyToPlay();

    const cars = new CarList(names);
    cars.race(tryCount);

    this.showResult(names, cars.positions);
  },

  showResult(nameList, moveList) {
    const winners = this.decideWinners(nameList, moveList);

    this.printWinners(winners);
  },

  decideWinners(nameList, moveList) {
    const maxPosition = Math.max(...moveList);

    return nameList.filter((name, index) => moveList[index] === maxPosition);
  },

  printWinners(winnerList) {
    const finalWinners = winnerList.map((winner) => winner).join(", ");

    Console.print(`\n${IN_GAME_MESSAGE.finalWinner} ${finalWinners}`);
  },
};

export default CarRacing;
