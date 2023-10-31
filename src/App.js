import { MESSAGE } from "./constants/messages.js";
import { Console, Random } from "@woowacourse/mission-utils";

export class App {
  constructor() {
    this.moveCount;
  }

  setMoveCount(carNames) {
    this.moveCount = carNames.reduce((obj, name) => {
      return {
        ...obj,
        [name]: "",
      };
    }, {});
  }

  async play() {
    this.startGame();
  }

  async startGame() {
    const { carNames, tryNumber } = await this.getInputValue();
    this.setMoveCount(carNames);
    this.addMoveCount(carNames);
    MESSAGE.getGameScore(this.moveCount);
  }

  async getInputValue() {
    Console.print(MESSAGE.START);
    const carNames = (await Console.readLineAsync("")).split(",");

    Console.print(MESSAGE.INPUT);
    const tryNumber = await Console.readLineAsync("");

    return { carNames, tryNumber };
  }

  addMoveCount(carNames) {
    carNames.forEach((name) => {
      if (Random.pickNumberInRange(0, 9) >= 4) this.moveCount[name] += "-";
    });
  }
}

export default App;
