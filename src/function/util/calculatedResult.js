import { transformKeysValue } from "../transformKeyValue";

export const calculatedResult = (resultArr) => {
  const carCount = [];
  const result = [];

  resultArr.forEach((el) => {
    const carName = transformKeysValue(el);
    carCount.push(el[carName].length);
  });

  const winnerCount = Math.max(...carCount);

  resultArr.forEach((el) => {
    const carName = transformKeysValue(el);

    if (winnerCount === el[carName].length) {
      result.push(carName.join(""));
    }
  });

  return result;
};
