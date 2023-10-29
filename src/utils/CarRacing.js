import { Console } from "@woowacourse/mission-utils";
import { FORWARD_CRITERIA, IN_GAME_MESSAGE } from "./Constants.js";
import Car from "./Car.js";
import User from "./User.js";

const CarRacing = {
  async playCarRacing() {
    const carNameList = User.getCarNames();
    const tryCount = User.getTryCount();
    const carMoveForwardList = new Array(carNameList.length).fill(0);

    for (let count = 0; count < tryCount; count += 1) {
      const carMovesList = Car.getCarMovesList(carNameList.length);

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
    carMoveForwards.map((forward, index) => {
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

  printWinner(winners){
    return winners.map((winner) => winner).join(',');
  }
};

export default CarRacing;
