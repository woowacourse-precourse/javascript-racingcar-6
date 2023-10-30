export const calculatedResult = (resultArr) => {
  const carCount = [];
  const result = [];

  resultArr.forEach((el) => {
    const carName = Object.keys(el);
    carCount.push(el[carName].length);
  });

  const winnerCount = Math.max(...carCount);

  resultArr.forEach((el) => {
    const carName = Object.keys(el);

    if (winnerCount === el[carName].length) {
      result.push(carName.join(""));
    }
  });

  return result;
};