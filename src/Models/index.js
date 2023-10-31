import { Random } from "@woowacourse/mission-utils";

class Model {
  setInitialCarMovePoint(Cars) {
    const result = {};
    Cars.map((el) => (result[el] = 0));

    return result;
  }

  removeWhitespace(carName) {
    const regex = /\s/g;
    let result;

    if (regex.test(carName)) {
      result = carName.replace(regex, "");

      return result;
    }
    // 공백 없을 시 값 그대로 리턴
    return carName;
  }

  calculateCarMovePoint(point) {
    const cars = Object.keys(point);

    cars.forEach((el) => {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) point[el] += 1;
    });

    return point;
  }

  repeatMessage(message, times) {
    const result = message.repeat(times);

    return result;
  }

  getHighestMovePoint(result) {
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
