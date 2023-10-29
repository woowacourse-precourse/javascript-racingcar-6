import { Random } from "@woowacourse/mission-utils";

const Car = {
  getMoveForwards(carNames) {
    return new Array(carNames.length).fill(0);
  },

  createCarMoves(length) {
    const carMoves = new Array(length).map(() =>
      Random.pickNumberInRange(0, 9)
    );
    return carMoves;
  },
};

export default Car;
