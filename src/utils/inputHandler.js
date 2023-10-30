import { Console } from "@woowacourse/mission-utils";
import CarError from "../errors/CarErrors.js";

export async function inputCarNameHandler() {
  const carName = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  CarError.checkInput(carName);

  const carList = carName.split(",");
  CarError.checkInputLength(carList);

  return generateTrimmedArray(carList);
}

export async function inputTryNumberHandler() {
  const TryNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return TryNumber.trim();
}

function generateTrimmedArray(inputList) {
  const trimmedArray = inputList.map((element) => element.trim());
  return trimmedArray;
}
