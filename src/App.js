import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, MESSAGE, NUMBER } from "./constants.js";

class App {
  async play() {
    const nameInput = await Console.readLineAsync(MESSAGE.CARNAME_INPUT);
    this.validateNameInput(nameInput);

    const cars = nameInput.split(",").map((name) => ({ name, position: 0 }));

    const tryCount = await Console.readLineAsync(MESSAGE.TRYCOUNT_INPUT);
    this.validateTryCount(tryCount);
    const tryCountNumber = Number(tryCount);

    Console.print(MESSAGE.PRINT_RESULT);
    for (let i = 0; i < tryCountNumber; i++) {
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
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
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
    if (tryCount === "") {
      throw new Error(ERROR_MESSAGE.EMPTY_TRYCOUNT); // 시도 횟수에 빈 값이 있는지 확인
    }
    if (tryCount <= 0) {
      throw new Error(ERROR_MESSAGE.INVALID_TRYCOUNT); // 시도 횟수가 0보다 큰지 확인
    }
    if (isNaN(tryCount)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_TRYCOUNT); // 시도 횟수가 숫자인지 확인
    }
  }
  validateNameInput(nameInput) {
    if (nameInput === "" || nameInput.split(",").some((name) => name === "")) {
      throw new Error(ERROR_MESSAGE.EMPTY_NAME); // 차 이름에 빈 값이 있는지 확인
    }
    if (nameInput.split(",").length !== new Set(nameInput.split(",")).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME); // 차 이름에 중복된 값이 있는지 확인
    }
    if (nameInput.split(",").some((name) => name.length > 5)) {
      throw new Error(ERROR_MESSAGE.OVER_LENGTH_NAME); // 차 이름이 5글자를 초과하는지 확인
    }
    if (nameInput.includes(" ")) {
      throw new Error(ERROR_MESSAGE.SPACE_NAME); // 입력할 때 공백이 있는지 확인
    }
  }
}

export default App;
