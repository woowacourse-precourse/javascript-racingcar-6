import { console, readLine } from "../../utils";
import { CAR_NAME_LENGTH_LIMIT, MESSAGES } from "../../constants";
import { CustomError } from "../../exceptions";

import { Cars, RacingRule } from "../../domain";

export class RacingCarGame {
  #rule;
  #cars;
  #totalRounds;
  #currentRound = 0;

  constructor(rule) {
    this.#rule = rule;
  }

  static createGame(rule) {
    if (!(rule instanceof RacingRule))
      throw new CustomError(MESSAGES.ERROR.RULE);
    return new RacingCarGame(rule);
  }

  async promptCarNames() {
    const carNames = await this.#getCarNamesFromUser();
    this.#validateCarNames(carNames);
    this.#setCars(carNames);
  }

  async promptTotalRounds() {
    const totalRoundsInput = await this.#getTotalRoundsFromUser();
    this.#validateTotalRounds(totalRoundsInput);
    this.#totalRounds = totalRoundsInput;
  }

  startRacing() {
    console(MESSAGES.RESULT);
    while (this.#currentRound < this.#totalRounds) {
      this.#proceedRound();
      this.#printRoundResult();
      this.#currentRound += 1;
    }
  }

  printWinnerNames() {
    const winnerNames = this.#getWinnerNames();
    console(MESSAGES.WINNER(winnerNames));
  }

  async #getCarNamesFromUser() {
    const carNamesInput = await readLine(MESSAGES.PLACEHOLDER.CAR.NAME);
    const carNames = carNamesInput.split(",");

    return carNames;
  }

  async #getTotalRoundsFromUser() {
    return +(await readLine(MESSAGES.PLACEHOLDER.ROUND));
  }

  #setCars(carNames) {
    this.#cars = new Cars(carNames);
  }

  #validateCarNames(carNames) {
    carNames.forEach((carName) => {
      if (carName === "") throw new CustomError(MESSAGES.ERROR.CAR.NAME.EMPTY);

      if (carName.length > CAR_NAME_LENGTH_LIMIT)
        throw new CustomError(
          MESSAGES.ERROR.CAR.NAME.LENGTH(CAR_NAME_LENGTH_LIMIT)
        );
    });
    return true;
  }

  #validateTotalRounds(totalRounds) {
    if (totalRounds === "")
      throw new CustomError(MESSAGES.ERROR.TOTAL_ROUNDS.EMPTY);

    if (isNaN(totalRounds))
      throw new CustomError(MESSAGES.ERROR.TOTAL_ROUNDS.TYPE);

    if (totalRounds <= 0)
      throw new CustomError(MESSAGES.ERROR.TOTAL_ROUNDS.LENGTH);

    if (!Number.isInteger(totalRounds))
      throw new CustomError(MESSAGES.ERROR.TOTAL_ROUNDS.NOT_INTEGER);
  }

  #proceedRound() {
    this.#cars.getCars().forEach((car) => {
      if (this.#rule.shouldRun()) car.run();
    });
  }

  #printRoundResult() {
    console(this.#getRoundResult());
  }

  #getRoundResult() {
    const carNames = this.#cars.getCarNames();
    const roundResult = this.#cars.getCarOffsets().map((offset) => {
      return "-".repeat(offset);
    });

    let result = "";

    carNames.forEach((carName, index) => {
      result += `${carName} : ${roundResult[index]}\n`;
    });

    return result;
  }

  #getWinnerNames() {
    const maxOffset = Math.max(...this.#cars.getCarOffsets());
    const winners = this.#cars.getCars().filter((car) => {
      return car.horizontalOffset === maxOffset;
    });
    const winnerNames = winners.map((winner) => winner.name).join(", ");

    return winnerNames;
  }
}
