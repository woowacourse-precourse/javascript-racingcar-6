import { Console } from "@woowacourse/mission-utils";

class RacingManager {
  constructor() {
    this.carArr = [];
    this.trial = 0;
  }

  async gameStart() {
    const car = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const trial = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    this.carArr = car.split(",");
    this.trial = trial;
  }

  carStatus() {
    Console.print("");
    Console.print("실행 결과");
    for (let i = 0; i < this.trial; i++) {
      for (let j = 0; j < this.carArr.length; j++) {
        Console.print(`${this.carArr[j]} : 전진횟수`);
      }
      Console.print("");
    }
  }
}

export default RacingManager;
