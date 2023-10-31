const maxStepCallback = (max, car) =>
  car.getStep() > max ? car.getStep() : max;

const maxStep = (cars) => cars.reduce(maxStepCallback, cars[0].getStep());

export const findWinners = (cars) =>
  cars.filter((car) => car.getStep() === maxStep(cars));
