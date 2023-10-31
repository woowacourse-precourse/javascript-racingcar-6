import { errorMessages } from "./Message.js";

export function checkCarNameLength(carNames) {
  carNames.forEach((carName) => {
    if (carName.length > 5) throw new Error(errorMessages.ERROR_CARNAME_LENGTH);
  });
}

export function checkCountType(count) {
  if (count.match(/\D/g)) {
    throw new Error(errorMessages.ERROR_COUNT_TYPE);
  }
}
