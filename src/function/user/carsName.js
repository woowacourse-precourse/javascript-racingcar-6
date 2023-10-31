import { Console } from "@woowacourse/mission-utils";
import { transformKeysValue } from "../transformKeyValue.js";

export const carsName = async () => {
  const userInputValue = await Console.readLineAsync(
    "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)"
  );

  const result = userInputValue.split(",").map((el) => {
    return { [el]: "" };
  });

  result.forEach((name) => {
    const carName = transformKeysValue(name);

    if (carName[0].length > 5) {
      throw new Error(
        "[ERROR] 자동차 이름의 길이는 5자 이하입니다. 게임을 다시 시작해주세요"
      );
    }
  });

  return result;
};
