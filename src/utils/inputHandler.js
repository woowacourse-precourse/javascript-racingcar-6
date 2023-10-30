import { Console } from "@woowacourse/mission-utils";
import CarErrors from "../errors/CarErrors.js";
import TryErrors from "../errors/TryErrors.js";
import CommonError from "../errors/CommonError.js";

export async function inputCarNameHandler() {
  const carName = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  CommonError.checkEmpty(carName);

  const carList = carName.split(",");
  CarErrors.checkInputLength(carList);

  return generateTrimmedArray(carList);
}

export async function inputTryNumberHandler() {
  const TryNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

  CommonError.checkEmpty(TryNumber);
  TryErrors.checkInputNumber(TryNumber);
  TryErrors.checkNagativeNumber(TryNumber);

  return TryNumber.trim();
}

function generateTrimmedArray(inputList) {
  const trimmedArray = inputList.map((element) => element.trim());
  return trimmedArray;
}
