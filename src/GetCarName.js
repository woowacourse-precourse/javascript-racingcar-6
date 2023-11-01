import { Console } from "@woowacourse/mission-utils";
import * as message from "./Message.js";

export default async function getCarName() {
  const carNames = await Console.readLineAsync(`${message.GET_CAR_NAME}`);
  const carNameArray = carNames.split(",");
  if (validationCarName(carNameArray)) {
    return carNameArray;
  } else {
    throw Error(`${message.ERROR_INVALID_NAME}`);
  }
}

function validationCarName(carNameArray) {
  const isNameLengthValid = carNameArray.every(
    (name) => name.length <= 5 && name.length > 0
  );

  const isNotSpace = carNameArray.every((name) => !name.includes(" "));

  const isNotDuplication =
    carNameArray.length === [...new Set(carNameArray)].length;

  return isNameLengthValid && isNotSpace && isNotDuplication;
}
