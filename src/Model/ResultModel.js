import { NEW_LINE, STICK } from '../constants/constants';

export default class ResultModel {
  #allAttempsResult;

  #consoleOutput;

  constructor() {
    this.#allAttempsResult = [];
    this.#consoleOutput = [];
  }

  addAttempsResult(cars) {
    const attempResult = [];
    cars.forEach((car) => attempResult.push(Object.values(car)));
    this.#allAttempsResult.push(attempResult);
  }

  getAllRacingResult() {
    return this.#allAttempsResult;
  }

  makeConsoleOutputTemplete() {
    this.#allAttempsResult.forEach((attempResult) =>
      this.#formatCarMoveStrings(attempResult),
    );

    return this.#consoleOutput.join('');
  }

  #formatCarMoveStrings(attempResult) {
    attempResult.reduce((acc, [carName, moveCount]) => {
      acc.push(`${carName} : ${STICK.repeat(moveCount)}${NEW_LINE}`);
      return acc;
    }, this.#consoleOutput);
    this.#consoleOutput.push(NEW_LINE);
  }
}
