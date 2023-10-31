import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";
import CarList from "./CarList.js";
import User from "./User.js";

const CarRacing = {
  async playCarRacing() {
    const carNameList = await User.getCarNames();
    const tryCount = await User.getTryCount();
    let carMoveForwardList = CarList.getMoveForwards(carNameList);

    for (let count = 0; count < tryCount; count += 1) {
      const carMovesList = CarList.createCarMoves(carNameList.length);
      carMoveForwardList = CarList.countMoveForward(
        carMoveForwardList,
        carMovesList
      );
      this.showMoveResult(carNameList, carMoveForwardList);
    }

    const winners = this.decideWinner(carNameList, carMoveForwardList);
    this.printWinner(winners);
  },

  showMoveResult(carNames, carMoves) {
    Console.print("\n");
    const moveSign = carMoves.map((moves) => "-".repeat(moves));
    carNames.forEach((name, index) => {
      Console.print(`${name} : ${moveSign[index]}`);
    });
  },

  decideWinner(carNameList, carMoveForwardList) {
    const winnerList = [];
    const maxMoveForwardCount = Math.max(...carMoveForwardList);

    carMoveForwardList.forEach((forward, index) => {
      if (forward === maxMoveForwardCount) {
        winnerList.push(carNameList[index]);
      }
    });

    return winnerList;
  },

  printWinner(winners) {
    const finalWinners = winners.map((winner) => winner).join(", ");
    Console.print(`\n${IN_GAME_MESSAGE.finalWinner} ${finalWinners}`);
  },
};

export default CarRacing;
