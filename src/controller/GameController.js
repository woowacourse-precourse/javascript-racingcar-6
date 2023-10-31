import { MESSAGE } from "../constants/messages.js";
import { Console } from "@woowacourse/mission-utils";
export class GameController {
  constructor(logic, view) {
    this.logic = logic;
    this.view = view;
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

  async startGame() {
    const { carNames, tryNumber } = await this.getInputValue();
    this.setMoveCount(carNames);
    this.printMoveCount(carNames, tryNumber);
    this.printWinnersNames(this.moveCount);
  }

  async getInputValue() {
    Console.print(MESSAGE.START);
    const carNames = (await Console.readLineAsync("")).split(",");

    Console.print(MESSAGE.INPUT);
    const tryNumber = await Console.readLineAsync("");

    return { carNames, tryNumber };
  }

  printMoveCount(carNames, tryNumber) {
    this.view.printInitialMessages();
    this.logic.performMoves(carNames, tryNumber, this.moveCount);
  }

  printWinnersNames(moveCount) {
    const maxMoveCount = this.logic.getMaxMoveCount(moveCount);
    const winnersNames = this.logic.getWinnerNames(moveCount, maxMoveCount);
    this.view.printEndMessages(winnersNames);
  }
}
