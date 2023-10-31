import { Console } from "@woowacourse/mission-utils";
import CarErrors from "../errors/CarErrors.js";
import TryErrors from "../errors/TryErrors.js";
import CommonError from "../errors/CommonError.js";
import { COMMAND } from "./constants.js";

function generateUniqueCarListAndValidate(carName) {
  const carList = carName.split(",");
  const carListSet = new Set(carList);
  const nonDuplicateCarList = [...carListSet];

  CarErrors.checkInputLength(nonDuplicateCarList);
  return nonDuplicateCarList;
}

function generateTrimmedArray(inputList) {
  const trimmedArray = inputList.map((element) => element.trim());
  return trimmedArray;
}

export async function handleCarNameInput() {
  const carName = await Console.readLineAsync(COMMAND.START_MESSAGE);
  CommonError.checkEmpty(carName);

  const carList = generateUniqueCarListAndValidate(carName);
  return generateTrimmedArray(carList);
}

export async function handleTryNumberInput() {
  const TryNumber = await Console.readLineAsync(COMMAND.TRY_NUMBER_QUESTION);

  CommonError.checkEmpty(TryNumber);
  TryErrors.checkInputNumber(TryNumber);
  TryErrors.checkNagativeNumber(TryNumber);
  return TryNumber.trim();
}
