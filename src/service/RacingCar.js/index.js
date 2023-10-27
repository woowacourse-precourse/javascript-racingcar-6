import { MESSAGES } from "../../constants/messages";
import { CustomError } from "../../exceptions";

CAR_NAME_LENGTH_LIMIT = 5;

export class RacingCarGame {
  #cars;
  #totalRounds;
  #currentRound = 0;
  #winners;

  #validateCarNames(carName) {
    if (carName === "") throw new CustomError(MESSAGES.ERROR.CAR.NAME.EMPTY);
    if (carName.length > CAR_NAME_LENGTH_LIMIT)
      throw new CustomError(
        MESSAGES.ERROR.CAR.NAME.LENGTH(CAR_NAME_LENGTH_LIMIT)
      );
  }
}
