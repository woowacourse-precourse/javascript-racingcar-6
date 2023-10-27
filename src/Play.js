export const makeRandomNums = (cars) => {
  const result = [];

  cars.forEach((car) => {
    const randomNum = Random.pickNumberInRange(0, 9);

    result.push([car, randomNum]);
  });

  return result;
};
