import { Console, Random } from "@woowacourse/mission-utils";
import { errorMessage, systemMessage } from "./global/message";
import { distanceNumber } from "./global/number.js";

class App {
  racing(cars, tryCount) {
    let accumulate = Array(cars.length).fill("");
    for (let i = 0; i < tryCount; i++) {
      for (let j = 0; j < cars.length; j++) {
        let distance = Random.pickNumberInRange(
          distanceNumber.MIN_DISTANCE_LENGTH,
          distanceNumber.MAX_DISTANCE_LENGTH
        );
        if (distance >= 4) {
          accumulate[j] += "-";
        }
        Console.print(`${cars[j]} : ${accumulate[j]}`);
      }
      Console.print("");
    }
    const maxDistance =
      accumulate.length > 0
        ? Math.max(...accumulate.map((str) => str.length))
        : 0;
    let winner = [];
    for (let i = 0; i < cars.length; i++) {
      if (accumulate[i].length === maxDistance) winner.push(cars[i]);
    }
    return winner;
  }

  checkCarsNameException(cars) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].length > 5)
        throw new Error(errorMessage.INVALID_CAR_NAME_LENGTH);
    }
  }

  checkCarsDuplicateException(cars) {
    let checkDuplicate = [];
    for (let i = 0; i < cars.length; i++) {
      if (checkDuplicate.includes(cars[i])) {
        throw new Error(errorMessage.INVALID_CAR_NAME_DUPLICATE);
      }
      checkDuplicate.push(cars[i]);
    }
  }

  async play() {
    try {
      // 시스템 시작
      Console.print(systemMessage.START);
      let cars = await Console.readLineAsync("");

      // 입력받은 경주할 자동차들에 대한 예외처리
      cars = cars.split(",");
      this.checkCarsNameException(cars);
      this.checkCarsDuplicateException(cars);

      // 시도 할 횟수 입력
      Console.print(systemMessage.TRY_COUNT);
      let tryCount = await Console.readLineAsync("");

      // 입력받은 시도 할 횟수에 대한 예외처리
      tryCount = Number(tryCount);
      Console.print("");

      // 레이싱게임 진행
      let winner = this.racing(cars, tryCount);
      // 최종 우승자 출력하기
      Console.print(`최종 우승자 : ${winner.join(", ")}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
