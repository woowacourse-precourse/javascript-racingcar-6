import { INPUT_LIMIT, ERROR_MESSAGE } from "../constants.js";
import { CustomError } from "./CustomError.js";

const nameValidation = function (playerNames) {
  if (playerNames.length === 1) {
    throw new CustomError(ERROR_MESSAGE.onePlayerOnly);
  }
  if (playerNames.length > INPUT_LIMIT.playerNumber) {
    throw new CustomError(ERROR_MESSAGE.playerNumberLimit);
  }
  playerNames.forEach((playerName) => {
    if (playerName.length === 0) {
      throw new CustomError(ERROR_MESSAGE.playerNameEmpty);
    }
    if (playerName.length > INPUT_LIMIT.playerName) {
      throw new CustomError(ERROR_MESSAGE.playerNameLengthLimit);
    }
  });
  if (playerNames.length !== new Set(playerNames).size) {
    throw new CustomError(ERROR_MESSAGE.playerNameDuplicated);
  }
};

const repeatCountValidation = function (repeatCount) {
  if (isNaN(repeatCount)) {
    throw new CustomError(ERROR_MESSAGE.repeatCountNaN);
  }
  if (repeatCount === "") {
    throw new CustomError(ERROR_MESSAGE.repeatCountZero);
  }
  if (repeatCount === 0) {
    throw new CustomError(ERROR_MESSAGE.repeatCountZero);
  }
  if (repeatCount > INPUT_LIMIT.repeatCount) {
    throw new CustomError(ERROR_MESSAGE.repeatCountLimit);
  }
};

export { nameValidation, repeatCountValidation };
