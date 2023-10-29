import { STEP_SHAPE } from '../constants.js';

const drawStep = (car) => {
  const name = car.getName();
  const step = STEP_SHAPE.repeat(car.getStep());

  return `${name} : ${step}`;
};

export default drawStep;
