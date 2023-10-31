import { MESSAGE } from "./constants/messages.js";
import { RANGE } from "./constants/range.js";
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
    this.printMoveCount(carNames, tryNumber);
    this.printWinnerNames(this.moveCount);
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
      if (
        Random.pickNumberInRange(RANGE.START, RANGE.END) >=
        RANGE.MOVE_THERESHOLD
      )
        this.moveCount[name] += "-";
    });
  }

  printMoveCount(carNames, tryNumber) {
    this.printInitialMessages();
    this.performMoves(carNames, tryNumber);
  }

  printInitialMessages() {
    Console.print("");
    Console.print(MESSAGE.RESULT);
  }

  performMoves(carNames, tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      this.addMoveCount(carNames);
      MESSAGE.getGameScore(this.moveCount);
    }
  }

  getMaxMoveCount(moveCount) {
    const sortedMoveCount = Object.entries(moveCount).sort(
      (a, b) => b[1].length - a[1].length
    );
    const maxMoveCount = sortedMoveCount[0][1].length;

    return maxMoveCount;
  }

  getWinnerNames(moveCount, maxMoveCount) {
    const WinnerNames = [];

    for (let car in moveCount) {
      if (moveCount[car].length === maxMoveCount) WinnerNames.push(car);
    }

    return WinnerNames;
  }

  printWinnerNames(moveCount) {
    const maxMoveCount = this.getMaxMoveCount(moveCount);
    const winnerNames = this.getWinnerNames(moveCount, maxMoveCount);

    Console.print(`최종 우승자 : ${winnerNames.join(", ")}`);
  }
}

export default App;
