import { MESSAGE } from "../constants/messages.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../constants/messages.js";

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
    this.validateName(carNames);

    Console.print(MESSAGE.INPUT);
    const tryNumber = Number(await Console.readLineAsync(""));
    this.validateNumber(tryNumber);

    return { carNames, tryNumber };
  }

  printMoveCount(carNames, tryNumber) {
    this.view.printInitialMessages();
    this.performMoves(carNames, tryNumber, this.moveCount);
  }

  performMoves(carNames, tryNumber) {
    Array.from({ length: tryNumber }).forEach(() => {
      this.logic.addMoveCount(carNames, this.moveCount);
      this.view.printGameScore(this.moveCount);
    });
  }

  printWinnersNames(moveCount) {
    const maxMoveCount = this.logic.getMaxMoveCount(moveCount);
    const winnersNames = this.logic.getWinnerNames(moveCount, maxMoveCount);
    this.view.printEndMessages(winnersNames);
  }

  validateName(carNames) {
    this.checkEceededNameLength(carNames);
    this.checkDuplicatedName(carNames);
  }

  validateNumber(tryNumber) {
    this.checkPositiveNumber(tryNumber);
    this.checkIsInteger(tryNumber);
  }

  checkEceededNameLength(carNames) {
    carNames.forEach((name) => {
      if (name.length > 5) throw new Error(ERROR_MESSAGE.EXCEEDED_LENGTH);
    });
  }

  checkDuplicatedName(carNames) {
    if (carNames.length != new Set(carNames).size)
      throw new Error(ERROR_MESSAGE.DUPLICATED_NAME);
  }

  checkPositiveNumber(tryNumber) {
    if (tryNumber < 0) throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
  }

  checkIsInteger(tryNumber) {
    if (!Number.isInteger(tryNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
  }
}
