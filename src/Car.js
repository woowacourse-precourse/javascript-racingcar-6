import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  #name = "";

  #forwardCount = 0;

  constructor(name) {
    this.#name = name;
  }

  goForward() {
    this.#forwardCount += 1;
  }

  printState() {
    MissionUtils.Console.print(`${this.#name} : ${"-".repeat(this.#forwardCount)}`);
  }

  isWinner(maxCount) {
    return this.#forwardCount === maxCount;
  }

  isSameName(name) {
    return this.#name === name;
  }

  get getName() {
    return this.#name;
  }

  get getForwardCount() {
    return this.#forwardCount;
  }
}

export default Car;
