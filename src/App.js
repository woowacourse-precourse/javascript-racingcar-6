import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
  async getCarName() {
    const carName = await MissionUtils.Console.readLineSync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    return carName.split(",");
  }
  async getTryCount() {
    const tryCount = await MissionUtils.Console.readLineSync(
      "시도할 회수는 몇회인가요?\n"
    );
    return tryCount;
  }
  makeCar(carName) {
    return carName.map((name) => ({ name, position: 0 }));
  }
}

export default App;
