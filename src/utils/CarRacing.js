import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import User from "./User.js";

const CarRacing = {
  async playCarRacing() {
    const carNameList = await User.getCarNames();
    const tryCount = await User.getTryCount();

    const carMoveForwardList = Car.getMoveForwards(carNameList);

    for (let count = 0; count < tryCount; count += 1) {
      const carMovesList = Car.createCarMoves(carNameList.length);

      this.showTryResult(carNameList, carMovesList);
      Car.countMoveForward(carMoveForwardList, carMovesList);
      const winners = this.decideWinner(carMoveForwardList);
      this.printWinner(winners);
    }
  },

  showTryResult(carNames, carMoves) {
    Console.print('\n');
    const moveSign = carMoves.map((moves) => '-'.repeat(moves));
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
    const finalWinners = winners.map((winner) => winner).join(",");
    return finalWinners;
  },
};

export default CarRacing;
