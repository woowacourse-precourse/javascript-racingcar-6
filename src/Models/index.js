import { Random } from "@woowacourse/mission-utils";

class Model {
  setInitialCarMovePoint(Cars) {
    const result = {};
    Cars.map((el) => (result[el] = 0));

    return result;
  }

  calculateCarMovePoint(point) {
    const cars = Object.keys(point);
    cars.map((el) => {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) point[el] += 1;
    });

    return point;
  }

  getHighestMovePoint(result) {
    // result 값 undefined일 경우 예외처리
    if (!result.cars || !result.moveResult) return;

    const cars = result?.cars;
    const ranking = cars?.sort(
      (a, b) => result?.moveResult[b] - result?.moveResult[a]
    );

    const winner = ranking?.filter(
      (el) => result?.moveResult[el] === result?.moveResult[ranking[0]]
    );
    const gameResult = winner?.join(", ");

    return gameResult;
  }
}

export default Model;
