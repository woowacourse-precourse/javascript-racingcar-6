import { MissionUtils } from "@woowacourse/mission-utils";
import { printErrorMessages } from "./constants";

// generateForwardCount
export function generateForwardCount() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  return randomNumber >= 4 ? true : false;
}
// validateCarName
export function validateCarName(carList) {
  carList.forEach((car) => {
    if (car.length > 5)
      throw new Error(printErrorMessages.CAR_NAME_LENGTH_ERROR);
  });
}
// validateGetNumber
export function validateGetNumber(number) {
  if (number.match(/\D/g)) {
    throw new Error(printErrorMessages.TRY_NUMBER_ERROR);
  }
}
