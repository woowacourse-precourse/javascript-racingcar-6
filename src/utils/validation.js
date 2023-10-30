import { INPUT_LIMIT, ERROR_MESSAGE } from "../constants.js";
import { CustomError } from "./CustomError.js";

const nameValidation = function (playerNames) {
  if (playerNames.length > 100) {
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

export { nameValidation };
