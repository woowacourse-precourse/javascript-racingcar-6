import { getRandomNumberInRange } from "../utils/getRandomNumberInRange.js";
import { RACING } from "../constants/carRacing.js";

class CarRacingGame {
  constructor() {}

  /**
   * 유저에게 입력받은 자동차 이름들을 객체를 담은 배열의 형태로 만드는 메서드
   * @params {string}
   * @return [{
   *  names: {string},
   *  numberOfMovesForward: {number},
   * }]
   */
  static setupCarList(carListString) {
    const carListArr = carListString.split(",").map((carName) => ({
      name: carName.trim(),
      numberOfMovesForward: 0,
    }));

    return carListArr;
  }

  static decideWheterToMoveForward(carListArr) {
    carListArr.forEach((car) => {
      const randomNumber = getRandomNumberInRange(
        RACING.RANDOM_RANGE_MIN_VALUE,
        RACING.MAX_ATTEMPTS_NUMBER,
      );
      if (randomNumber >= RACING.MIN_NUMBER_TO_MOVE_FORWARD) {
        car.numberOfMovesForward += 1;
      }
    });
  }

  static getFinalWinner(carListArr) {
    const maxNumberOfMovesForward = Math.max(
      ...carListArr.map((car) => car.numberOfMovesForward),
    );
    const winnerArr = carListArr.filter(
      (car) => car.numberOfMovesForward === maxNumberOfMovesForward,
    );

    return winnerArr;
  }
}

export default CarRacingGame;
