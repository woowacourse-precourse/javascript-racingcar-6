import errorMessage from './Constant.js';

const carName = userInput => {
  const cars = userInput.split(',');

  if (userInput.includes(',') === false) {
    throw Error(errorMessage.INSUFFICIENT_CARS);
  }

  if (cars.length === 2 && cars[1] === '') {
    throw Error(errorMessage.INSUFFICIENT_CARS);
  }

  if (cars.find(car => car.length > 5)) {
    throw Error(errorMessage.CAR_NAME_LENGTH);
  }
};

const validate = {
  carName,
};

export default validate;
