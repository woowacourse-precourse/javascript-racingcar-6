import { STEP_SHAPE } from '../constants.js';

const drawStep = (car) => {
  let step = STEP_SHAPE.repeat(car.step);

  return `${car.name} : ${step}`;
};

export default drawStep;
