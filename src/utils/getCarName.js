import { Console } from "@woowacourse/mission-utils";
import { checkEmptyValue, checkCarNameLength } from "../validators/carNameValidator.js";

export const getCarName = async () => {
  Console.print(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  const carName = await Console.readLineAsync("");
  const carNameArray = carName.split(",");

  checkEmptyValue(carNameArray);
  checkCarNameLength(carNameArray);

  return carNameArray;
};