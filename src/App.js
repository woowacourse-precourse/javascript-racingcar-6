import { MissionUtils } from "@woowacourse/mission-utils";

class RacingCar {
  constructor(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    this.name = name;
  }
}

class App {
  async play() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분): ");
  }
}

export default App;
