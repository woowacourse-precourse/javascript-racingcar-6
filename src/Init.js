import { Console } from "@woowacourse/mission-utils";

class Init {
  async start() {
    try {
      const carNames = await this.getCarNames();
      const numberOfTries = await this.getNumberOfTries();

      // 레이싱 게임 시작
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async getCarNames() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");

    const name = await Console.readLineAsync();
    Console.print(name);

    const carNameList = name.split(",").map((item) => item.trim());
    if (!this.isValidCarNames(carNameList)) {
      throw new Error("자동차의 이름 형식이 올바르지 않습니다.");
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
      throw new Error("숫자가 잘못된 형식입니다.");
    }
    return tryNum;
  }

  isValidNumberOfTries(tryNum) {
    return !Number.isNaN(tryNum) && tryNum > 0;
  }
}

export default Init;
