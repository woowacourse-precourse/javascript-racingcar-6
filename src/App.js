import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      let carsInfo = {};

      const carNameList = await this.inputCarNames();
      this.checkNames(carNameList);

      const roundNumber = await this.inputRoundNumber();
      this.checkNumber(roundNumber);

      this.createObject(carNameList, carsInfo);
    } catch (error) {
      throw error;
    }
  }

  async inputCarNames() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return carNames.split(",");
  }

  async inputRoundNumber() {
    return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  checkNames(carNameList) {
    for (let i = 0; i < carNameList.length; i++) {
      if (carNameList[i].length > 5) {
        throw new Error("[ERROR] 사용할 수 없는 이름입니다");
      }
    }
  }

  checkNumber(roundNumber) {
    if (isNaN(roundNumber)) {
      throw new Error("[ERROR] 숫자를 입력해주세요");
    }
  }

  randomNumber() {
    const number = Random.pickNumberInRange(0, 9);
    return number;
  }

  createObject(carNameList, carsInfo) {
    for (let j = 0; j < carNameList.length; j++) {
      carsInfo[carNameList[j]] = { score: 0 };
    }
  }
}

export default App;
