import { Console } from "@woowacourse/mission-utils";
import { transformKeysValue } from "../transformKeyValue.js";

export const gaemProgress = (carsNames, carsNumber) => {
  const carsNameArray = [...carsNames]

  carsNameArray.forEach((el, index) => {
    const carsName = transformKeysValue(el).join("");

    if (carsNumber[index] >= 4) {
      el[carsName] += "-";
    }

    Console.print(`${carsName} : ${el[carsName]}`);
  });
};
