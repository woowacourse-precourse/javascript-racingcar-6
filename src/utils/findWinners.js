const maxStepCallback = (max, car) => {
  return car.getStep() > max ? car.getStep() : max;
};

const maxStep = (cars) => {
  return cars.reduce(maxStepCallback, cars[0].getStep());
};

export const findWinners = (cars) => {
  return cars.filter((car) => car.getStep() === maxStep(cars));
};
