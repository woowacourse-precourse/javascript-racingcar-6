import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async checkCar(inputCar) {
    const temp = inputCar.split(",");
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].length <= 0) {
        throw new Error("[ERROR] 이름이 없는 자동차가 있습니다.");
      }
      if (temp[i].length >= 6) {
        throw new Error("[ERROR] 이름이 6자 이상인 자동차가 있습니다.");
      }
    }

    return temp;
  }
  async checkCount(inputCount) {
    if (isNaN(inputCount)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (inputCount <= 0) {
      throw new Error("[ERROR] 1 이상인 숫자를 입력해야 합니다.");
    }

    return inputCount;
  }
  async goForward(forwardList) {
    for (let carIdx = 0; carIdx < forwardList.length; carIdx++) {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      if (number >= 4) forwardList[carIdx]++;
    }
  }
  async makeExecResult(carList, forwardList) {
    let result = "";
    for (let carIdx = 0; carIdx < carList.length; carIdx++) {
      result += `${carList[carIdx]} : ${"-".repeat(forwardList[carIdx])}\n`;
    }
    return result;
  }

  async makeWinner(carList, forwardList) {
    const MAXCOUNT = Math.max(...forwardList);
    let winnerList = "";
    for (let carIdx = 0; carIdx < carList.length; carIdx++) {
      if (forwardList[carIdx] == MAXCOUNT) {
        winnerList += carList[carIdx] + ", ";
      }
    }
    return winnerList.slice(0, -2);
  }

  async play() {
    const inputCar = await MissionUtils.Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
    );
    const carList = await this.checkCar(inputCar);

    const inputCount = await MissionUtils.Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?`
    );
    const count = await this.checkCount(inputCount);

    let forwardList = new Array(carList.length).fill(0);

    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < count; i++) {
      this.goForward(forwardList);
      MissionUtils.Console.print(
        await this.makeExecResult(carList, forwardList)
      );
    }
    MissionUtils.Console.print(
      `최종 우승자 : ${await this.makeWinner(carList, forwardList)}`
    );
  }
}

export default App;