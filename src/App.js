import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async getInput(message) {
    try {
      const input = await MissionUtils.Console.readLineAsync(message);
      return input;
    } catch (error) {
      throw "[ERROR] 입력을 받는 중 실패하였습니다.";
    }
  }

  checkRightCarName(carList) {
    if (!carList.length)
      throw new Error("[ERROR] 자동차가 입력되지 않았습니다.");
    const ret = carList.every((car) => /^.{1,5}$/.test(car));
    if (!ret)
      throw new Error("[ERROR] 자동차 이름은 1~5자리로 이루어져야 합니다.");
    return true;
  }

  checkRightRoundNum(num) {
    const ret = /^[0-9]+$/.test(num);
    if (!ret) throw new Error("[ERROR] 올바른 숫자 형식이 아닙니다.");
    return true;
  }

  makeCarMap(carList) {
    const carMap = new Map();
    carList.forEach((car) => {
      carMap.set(car, 0);
    });
    return carMap;
  }

  playOneRound(carMap) {
    carMap.forEach((cnt, car) => {
      if (this.isCarGo()) carMap.set(car, cnt + 1);
    });
  }

  isCarGo() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum >= 4 ? true : false;
  }

  printCarState(carMap) {
    carMap.forEach((cnt, car) => {
      MissionUtils.Console.print(`${car} : ${"-".repeat(cnt)}`);
    });
    MissionUtils.Console.print("");
  }

  async play() {
    const carStrList = await this.getInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carList = carStrList.split(",");
    this.checkRightCarName(carList);
    const carMap = this.makeCarMap(carList);

    const roundNum = await this.getInput("시도할 횟수는 몇 회인가요?");
    this.checkRightRoundNum(roundNum);

    for (let i = 0; i < +roundNum; i++) {
      this.playOneRound(carMap);
      this.printCarState(carMap);
    }
  }
}

export default App;
