import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor(carName, forward) {
    this.carName = carName;
    this.forward = forward;
  }

  async play() {
    MissionUtils.Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    );

    const name = await this.getCarName();
    const cars = this.saveCarConstructor(name);
    MissionUtils.Console.print(name);

    const tryNum = await this.getNumberOfTry();
    MissionUtils.Console.print(tryNum);
  }

  async getCarName() {
    const name = await MissionUtils.Console.readLineAsync();
    return name;
  }

  saveCarConstructor(name) {
    const nameList = name.split(",");
    const cars = nameList.map((carName) => new App(carName, ""));
    return cars;
  }

  async getNumberOfTry() {
    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const tryNum = await MissionUtils.Console.readLineAsync();
    return tryNum;
  }
}

export default App;
