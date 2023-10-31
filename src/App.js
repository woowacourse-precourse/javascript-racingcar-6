import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, NUMBER } from "./constants.js";

class App {
  constructor() {
    this.cars = [];
  }
  async play() {
    const nameInput = await Console.readLineAsync(MESSAGE.CARNAME_INPUT);
    this.cars = nameInput.split(",").map((name) => ({ name, position: 0 }));
    const tryCount = await Console.readLineAsync(MESSAGE.TRYCOUNT_INPUT);
    Console.print(MESSAGE.PRINT_RESULT);
    for (let i = 0; i < tryCount; i++) {
      this.randomMove();
      this.printResult();
      Console.print("");
    }
    const winnerNames = this.getWinners().map((car) => car.name);
    Console.print(`${MESSAGE.PRINT_WINNERS}${winnerNames.join(", ")}`);
  }
  printResult() {
    // 게임 결과를 출력하는 메서드
    this.cars.forEach((car) => {
      Console.print(`${car.name}: ${"-".repeat(car.position)}`);
    });
  }
  randomMove() {
    this.cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(NUMBER.START_NUMBER, NUMBER.LAST_NUMBER) >= NUMBER.LIMIT_NUMBER) {
        // 랜덤 숫자가 4 이상일 경우 전진
        car.position += 1;
      }
    });
  }
  getWinners() {
    // 최종 우승자 return하는 메서드
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars.filter((car) => car.position === maxPosition);
  }
}

export default App;
