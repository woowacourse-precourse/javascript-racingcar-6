import { errorMessage } from "../messages/errorMessage.js";

export const checkRaceCount = (raceCount) => {
  const isValid = (input) => {
    return !isNaN(input) && input > 0;
  };

  if (isValid(raceCount)) {
    return raceCount;
  } else {
    throw new Error(errorMessage.INVALID_CAR_NAME);
  }
};
