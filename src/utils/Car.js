import { Random } from "@woowacourse/mission-utils";
import { FORWARD_CRITERIA } from "./Constants.js";

const Car = {
  getMoveForwards(carNames) {
    return new Array(carNames.length).fill(0);
  },

  createCarMoves(length) {
    const carMoves = Array.from({ length }, () =>
      Random.pickNumberInRange(0, 9)
    );
    return carMoves;
  },

  countMoveForward(carMoveForwards, carMoves) {
    carMoveForwards.forEach((forward, index) => {
      if (carMoves[index] >= FORWARD_CRITERIA) {
        return forward + 1;
      }
      return forward;
    });
  },
};

export default Car;
