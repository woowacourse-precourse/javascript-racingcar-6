import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
  async getCarName() {
    MissionUtils.Console.print(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    const carName = await MissionUtils.Console.readLineSync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    return carName.split(",");
  }
}

export default App;
