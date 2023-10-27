import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) this.position++;
  }

  toString() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

class App {
  async play() {}
}

export default App;
