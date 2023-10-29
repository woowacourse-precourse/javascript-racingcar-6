import { Console } from "@woowacourse/mission-utils";
import { FORWARD_CRITERIA, IN_GAME_MESSAGE } from "./Constants.js";
import Car from "./Car.js";

const CarRacing = {
  async playCarRacing() {
    const carNameList = await Console.readLineAsync(
      IN_GAME_MESSAGE.getCarName
    ).split(",");
    const tryCount = await Console.readLineAsync(IN_GAME_MESSAGE.getTryCount);
    const carMoveForwardList = new Array(carNameList.length).fill(0);

    for (let count = 0; count < tryCount; count += 1) {
      const carMovesList = Car.getCarMovesList(carNameList.length);

      this.showTryResult(carNameList, carMovesList);
      this.countMoveForward(carMoveForwardList, carMovesList);
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
};

export default CarRacing;
