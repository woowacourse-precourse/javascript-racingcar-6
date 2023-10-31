import { Console } from "@woowacourse/mission-utils";
import CarErrors from "../errors/CarErrors.js";
import TryErrors from "../errors/TryErrors.js";
import CommonError from "../errors/CommonError.js";
import { COMMAND } from "./constants.js";

export async function inputCarNameHandler() {
  const carName = await Console.readLineAsync(COMMAND.START_MESSAGE);
  CommonError.checkEmpty(carName);

  const carList = carName.split(",");
  CarErrors.checkInputLength(carList);

  return generateTrimmedArray(carList);
}

export async function inputTryNumberHandler() {
  const TryNumber = await Console.readLineAsync(COMMAND.TRY_NUMBER_QUESTION);

  CommonError.checkEmpty(TryNumber);
  TryErrors.checkInputNumber(TryNumber);
  TryErrors.checkNagativeNumber(TryNumber);

  return TryNumber.trim();
}

function generateTrimmedArray(inputList) {
  const trimmedArray = inputList.map((element) => element.trim());
  return trimmedArray;
}
