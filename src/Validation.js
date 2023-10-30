import { generateRandomNumber } from "./utils/index.js";
import { MESSAGES } from "./constant/message.js";

export const Validation = {
  validateGoForward: () => {
    return generateRandomNumber() >= 4;
  },
  validateRacingCarName: (carNames) => {
    if (!carNames) {
      throw new Error(MESSAGES.ERROR_NO_INPUT);
    }

    if (carNames.includes(" ")) {
      throw new Error(MESSAGES.ERROR_RACING_CAR_NAMES_WHITESPACE);
    }

    if (carNames.split(",").find((name) => name.length > 5)) {
      throw new Error(MESSAGES.ERROR_RACING_CAR_NAMES_LENGTH);
    }

    return carNames.split(",");
  },
};
