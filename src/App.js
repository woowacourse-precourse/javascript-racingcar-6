import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async readCar() {
    const inputCar = await MissionUtils.Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
    );

    // 입력값 검증
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
  async readCount() {
    const inputCount = await MissionUtils.Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?`
    );

    // 입력값 검증
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
  async printExecResult(carList, forwardList){
    for (let carIdx = 0; carIdx < carList.length; carIdx++){
      MissionUtils.Console.print(`${carList[carIdx]} : ${"-".repeat(forwardList[carIdx])}`);
    }
    MissionUtils.Console.print("");
  }

  async play() {
    const carList = await this.readCar();
    // console.log(carList);
    const count = await this.readCount();
    // console.log(count);
    let forwardList = new Array(carList.length).fill(0);

    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < count; i++) {
      this.goForward(forwardList);
      // console.log(forwardList);
      this.printExecResult(carList, forwardList);
    }
  }
}

export default App;

const app = new App();
app.play();
