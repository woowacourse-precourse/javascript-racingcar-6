import { Console } from "@woowacourse/mission-utils";
import {
  errorCarMessage,
  errorTryCountMessage,
  systemMessage,
} from "./global/message.js";
import RacingGame from "./game/RacingGame.js";

class App {
  checkCarsNameIsEmptyException(cars) {
    if (cars === "") throw new Error(errorCarMessage.INVALID_CAR_NAME_EMPTY);
  }

  checkCarsNameException(cars) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].length > 5)
        throw new Error(errorCarMessage.INVALID_CAR_NAME_LENGTH);
    }
  }

  checkCarsDuplicateException(cars) {
    let checkDuplicate = [];
    for (let i = 0; i < cars.length; i++) {
      if (checkDuplicate.includes(cars[i])) {
        throw new Error(errorCarMessage.INVALID_CAR_NAME_DUPLICATE);
      }
      checkDuplicate.push(cars[i]);
    }
  }

  checkTryCountIsNumberException(tryCount) {
    if (typeof tryCount !== "number")
      throw new Error(errorTryCountMessage.INVALID_TRY_COUNT_ISNUMBER);
  }

  checkTryCountMinimumException(tryCount) {
    if (tryCount < 1)
      throw new Error(errorTryCountMessage.INVALID_TRY_COUNT_MIN);
  }

  checkTryCountIsIntegerException(tryCount) {
    if (tryCount !== Math.floor(tryCount))
      throw new Error(errorTryCountMessage.INVALID_TRY_COUNT_TYPE);
  }

  async play() {
    try {
      // 시스템 시작
      Console.print(systemMessage.START);
      let cars = await Console.readLineAsync("");

      // 입력받은 경주할 자동차들에 대한 예외처리
      this.checkCarsNameIsEmptyException(cars);
      cars = cars.split(",");
      this.checkCarsNameException(cars);
      this.checkCarsDuplicateException(cars);

      // 시도 할 횟수 입력
      Console.print(systemMessage.TRY_COUNT);
      let tryCount = await Console.readLineAsync("");

      // 입력받은 시도 할 횟수에 대한 예외처리
      tryCount = Number(tryCount);
      this.checkTryCountIsNumberException(tryCount);
      this.checkTryCountMinimumException(tryCount);
      this.checkTryCountIsIntegerException(tryCount);
      Console.print("");

      // 레이싱게임 진행
      console.log(cars, tryCount);
      let winner = new RacingGame(cars, tryCount).racing();
      // 최종 우승자 출력하기
      Console.print(`최종 우승자 : ${winner.join(", ")}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
