import { Console } from "@woowacourse/mission-utils";
import { RESULT_WINNER } from "../utills/Constants.js";
export default class EndGame {
  result(carList) {
    this.#decendCarList(carList);
    this.#makeWinnerList(carList);
  }

  #decendCarList(carList) {
    carList.sort((a, b) => b[1] - a[1]);
  }

  #makeWinnerList(carList) {
    const result = [];

    carList.forEach((car) => {
      if (car.count != carList[0].count) return result;
      result.push(car.name);
    });

    this.#printWinnerList(result)
  }

  #printWinnerList(winnerList) {
    Console.print(RESULT_WINNER + winnerList.join(", "));
  }
}
