import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT, ERROR } from "./constants.js";
import { validateCarName, validateNumber } from "./validation.js";

class App {
  participant = [];
  count = [];

  async participate() {
    const carNameInput = await MissionUtils.Console.readLineAsync(
      INPUT.CAR_NAME
    );

    const carList = carNameInput.split(",");

    for (let i = 0; i < carList.length; i++) {
      if (!validateCarName(carList[i])) throw new Error(ERROR.NAME_LENGTH);
    }

    this.participant = carList;
    this.count = Array(this.participant.length).fill(0);
  }

  async getCycleCount() {
    const cycle = await MissionUtils.Console.readLineAsync(INPUT.CYCLE_COUNT);

    if (!validateNumber(cycle)) throw new Error(ERROR.CYCLE_COUNT_NUMBER);

    return cycle;
  }

  async forward() {
    const number = await MissionUtils.Random.pickNumberInRange(0, 9);

    if (parseInt(number) >= 4) return true;
    else return false;
  }

  async runOneCycle() {
    for (let j = 0; j < this.participant.length; j++) {
      if (await this.forward()) {
        this.count[j] += 1;
      }
      await MissionUtils.Console.print(
        `${this.participant[j]} : ${"-".repeat(this.count[j])}`
      );
    }
  }

  async depart(cycle) {
    for (let i = 0; i < cycle; i++) {
      await this.runOneCycle();
      MissionUtils.Console.print("\n");
    }
  }

  setWinner() {
    const max = Math.max(...this.count);
    const winner = [];

    for (let i = 0; i < this.participant.length; i++) {
      if (max === this.count[i]) winner.push(this.participant[i]);
    }

    MissionUtils.Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }

  async play() {
    await this.participate();

    const cycle = await this.getCycleCount();

    await this.depart(cycle);

    this.setWinner();
  }
}

export default App;
