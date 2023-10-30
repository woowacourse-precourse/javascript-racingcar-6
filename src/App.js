import { MissionUtils, Console, Random } from "@woowacourse/mission-utils";

class App {
  rollDice() {
    return Random.pickNumberInRange(0, 9);
  }

  async play() {}
}

export default App;
