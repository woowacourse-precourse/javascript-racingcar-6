import { Console } from "@woowacourse/mission-utils";
import { transformKeysValue } from "../transformKeyValue.js";

export const progressGame = (carsNames, carsNumber) => {
  const carsNameArray = [...carsNames]

  carsNameArray.forEach((el, index) => {
    const carName = transformKeysValue(el).join("");

    if (carsNumber[index] >= 4) {
      el[carName] += "-";
    }

    Console.print(`${carName} : ${el[carName]}`);
  });
};
