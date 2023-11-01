import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, NUMBER } from "./constants.js";

class App {
  async play() {
    const nameInput = await Console.readLineAsync(MESSAGE.CARNAME_INPUT);
    const cars = nameInput.split(",").map((name) => ({ name, position: 0 }));
    const tryCount = await Console.readLineAsync(MESSAGE.TRYCOUNT_INPUT);
    Console.print(MESSAGE.PRINT_RESULT);
    for (let i = 0; i < tryCount; i++) {
      this.randomMove(cars);
      this.printResult(cars);
      Console.print("");
    }
    const winnerNames = this.getWinners(cars).map((car) => car.name);
    Console.print(`${MESSAGE.PRINT_WINNERS}${winnerNames.join(", ")}`);
  }
  printResult(cars) {
    // 게임 결과를 출력하는 메서드
    cars.forEach((car) => {
      Console.print(`${car.name}: ${"-".repeat(car.position)}`);
    });
  }
  randomMove(cars) {
    cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(NUMBER.START_NUMBER, NUMBER.LAST_NUMBER) >= NUMBER.LIMIT_NUMBER) {
        // 랜덤 숫자가 4 이상일 경우 전진
        car.position += 1;
      }
    });
  }
  getWinners(cars) {
    // 최종 우승자 return하는 메서드
    const maxPosition = Math.max(...cars.map((car) => car.position));
    return cars.filter((car) => car.position === maxPosition);
  }
  validateTryCount(tryCount) {
    if (tryCount <= 0) {
      // 시도 횟수가 0보다 큰지 확인
      throw new Error(ERROR_MESSAGE.INVALID_TRYCOUNT);
    }
    if (tryCount === "") {
      // 시도 횟수에 빈 값이 있는지 확인
      throw new Error(ERROR_MESSAGE.EMPTY_TRYCOUNT);
    }
    if (isNaN(tryCount)) {
      // 시도 횟수가 숫자인지 확인
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_TRYCOUNT);
    }
  }
  validateNameInput(nameInput) {
    if (nameInput === "") {
      // 차 이름에 빈 값이 있는지 확인
      throw new Error(ERROR_MESSAGE.EMPTY_NAME);
    }
    if (nameInput.split(",").length !== new Set(nameInput.split(",")).size) {
      // 차 이름에 중복된 값이 있는지 확인
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
    if (nameInput.split(",").some((name) => name.length > 5)) {
      // 차 이름이 5글자를 초과하는지 확인
      throw new Error(ERROR_MESSAGE.OVER_LENGTH_NAME);
    }
    if (nameInput.split(",").some((name) => name === "")) {
      // 차 이름에 빈 값이 있는지 확인
      throw new Error(ERROR_MESSAGE.EMPTY_NAME);
    }
  }
}

export default App;
