import { transformKeysValue } from "../transformKeyValue.js";

export const calculatedResult = (resultArr) => {
  const carCount = [];
  const result = [];

  resultArr.forEach((el) => {
    const carName = transformKeysValue(el);

    carCount.push(el[carName].length);
  });

  const winnerCount = Math.max(...carCount);

  resultArr.forEach((el) => {
    const carName = transformKeysValue(el).join("");
 
    if (winnerCount === el[carName].length) {
      result.push(carName);
    }
  });

  return result;
};
