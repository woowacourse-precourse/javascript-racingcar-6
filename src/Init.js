import { Console } from "@woowacourse/mission-utils";
import Race from "./Race";

class Init {
  async start() {
    const carsArray = await this.getCarNames();
    const numberOfTries = await this.getNumberOfTries();

    const RacingGame = new Race();
    await RacingGame.start(carsArray, numberOfTries);
  }

  async getCarNames() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");

    const name = await Console.readLineAsync();
    Console.print(name);

    const carNameList = name.split(",").map((item) => item.trim());
    if (!this.isValidCarNames(carNameList)) {
      Console.print("[ERROR] 자동차의 이름 형식이 올바르지 않습니다.");
      throw new Error("[ERROR]");
    }

    return this.createCarArray(carNameList);
  }

  isValidCarNames(carNameList) {
    return carNameList.every((name) => name.length <= 5 && name.length > 0);
  }

  createCarArray(carNameList) {
    return carNameList.map((item) => ({ name: item, forward: "" }));
  }

  async getNumberOfTries() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const tryNum = Number(await Console.readLineAsync());
    Console.print(tryNum);

    if (!this.isValidNumberOfTries(tryNum)) {
      Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
      throw new Error("[ERROR]");
    }
    return tryNum;
  }

  isValidNumberOfTries(tryNum) {
    return !Number.isNaN(tryNum) && tryNum > 0;
  }
}

export default Init;
