import { MESSAGES } from "../../constants/messages";
import { Cars } from "../../domain";
import { CustomError } from "../../exceptions";
import { readLine, shouldCarRun } from "../../utils";
import { console } from "../../utils/console";

CAR_NAME_LENGTH_LIMIT = 5;

export class RacingCarGame {
  #cars;
  #totalRounds;
  #currentRound = 0;

  static createGame() {
    return new RacingCarGame();
  }

  async promptCarNames() {
    const carNamesInput = await readLine(MESSAGES.PLACEHOLDER.CAR.NAME);
    const carNames = carNamesInput.split(",");

    carNames.forEach((carName) => {
      this.#validateCarNames(carName);
    });

    this.#setCars(carNames);
  }

  async promptTotalRounds() {
    const totalRoundsInput = await readLine(MESSAGES.PLACEHOLDER.ROUND);

    this.#validateTotalRounds(totalRoundsInput);

    this.#totalRounds = +totalRoundsInput;
  }

  play() {
    console(MESSAGES.RESULT);
    while (this.#currentRound < this.#totalRounds) {
      this.#cars.forEach((car) => {
        if (shouldCarRun()) car.run();
      });

      console(this.#getRoundResult());

      this.#currentRound += 1;
    }
  }

  #setCars(carNames) {
    this.#cars = new Cars(carNames);
  }

  #validateCarNames(carName) {
    if (carName === "") throw new CustomError(MESSAGES.ERROR.CAR.NAME.EMPTY);

    if (carName.length > CAR_NAME_LENGTH_LIMIT)
      throw new CustomError(
        MESSAGES.ERROR.CAR.NAME.LENGTH(CAR_NAME_LENGTH_LIMIT)
      );
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

  #getRoundResult() {
    const carNames = this.#cars.getCarNames();
    const roundResult = this.#cars.getCarOffsets().map((offset) => {
      return "-".repeat(offset);
    });

    return carNames.map((carName, index) => {
      return `${carName} : ${roundResult[index]}\n`;
    });
  }

  #getWinners() {
    const maxOffset = Math.max(...this.#cars.getCarOffsets());
    const winners = this.#cars.getCars().filter((car) => {
      return car.horizontalOffset === maxOffset;
    });

    return winners;
  }
}
