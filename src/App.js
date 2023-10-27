import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  async play() {}
}

export default App;
