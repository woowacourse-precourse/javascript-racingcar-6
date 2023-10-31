export const addCarNames = (input, carNames) => {
  const CAR_NAME = input.split(",");

  CAR_NAME.forEach((el) => carNames.push({ name: el, score: 0 }));
};
