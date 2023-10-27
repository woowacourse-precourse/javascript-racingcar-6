import { MESSAGES } from "../../constants/messages";
import { Cars } from "../../domain";
import { CustomError } from "../../exceptions";
import { readLine } from "../../utils";

CAR_NAME_LENGTH_LIMIT = 5;

export class RacingCarGame {
  #cars;
  #totalRounds;
  #currentRound = 0;
  #winners;

  async promptCarNames() {
    const carNamesInput = await readLine(
      MESSAGES.PLACEHOLDER.CAR.NAME(CAR_NAME_LENGTH_LIMIT)
    );
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
}
