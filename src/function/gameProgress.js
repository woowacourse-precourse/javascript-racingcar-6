import { Console } from "@woowacourse/mission-utils";

export const gaemProgress = (carsNames, carsNumber) => {
  carsNames.forEach((el, index) => {
    const carsName = Object.keys(el).join("");

    if (carsNumber[index] > 4) {
      el[carsName] += "-";
    }

    Console.print(`${carsName} : ${el[carsName]}`);
  });
};
