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

  makeCarMap(carList) {
    const carMap = new Map();
    carList.forEach((car) => {
      carMap.set(car, 0);
    });
    return carMap;
  }

  async play() {
    const carStrList = await this.getInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carList = carStrList.split(",");
    this.checkRightCarName(carList);
    const carMap = this.makeCarMap(carList);
  }
}

export default App;
