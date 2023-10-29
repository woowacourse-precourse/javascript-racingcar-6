import { Console } from "@woowacourse/mission-utils";
import CarError from "../errors/CarErrors.js";

export async function inputHandler() {
  const carName = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  CarError.checkInput(carName);

  const carList = carName.split(",");
  CarError.checkInputLength(carList);

  return generateTrimmedArray(carList);
}

function generateTrimmedArray(inputList) {
  const trimmedArray = inputList.map((element) => element.trim());
  return trimmedArray;
}
