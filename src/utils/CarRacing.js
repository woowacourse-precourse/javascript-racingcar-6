import { Console } from "@woowacourse/mission-utils";
import { FORWARD_CRITERIA } from "./Constants.js";
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
      this.countMoveForward(carMoveForwardList, carMovesList);
      const winners = this.decideWinner(carMoveForwardList);
      this.printWinner(winners);
    }
  },

  showTryResult(carNames, carMoves) {
    carNames.forEach((name, index) => {
      Console.print(`${name} : ${carMoves[index]}`);
    });
  },

  countMoveForward(carMoveForwards, carMoves) {
    carMoveForwards.forEach((forward, index) => {
      if (carMoves[index] >= FORWARD_CRITERIA) {
        return forward + 1;
      }
      return forward;
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
