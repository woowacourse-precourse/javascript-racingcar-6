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

const playCount = userInput => {
  const nonNumericRegex = /[^0-9]/;

  if (nonNumericRegex.test(userInput)) {
    throw Error(errorMessage.NON_NUMERIC_PLAYCOUNT);
  }
  if (userInput <= 0) {
    throw Error(errorMessage.NON_POSITIVE_PLAYCOUNT);
  }
};
const validate = {
  carName,
  playCount,
};

export default validate;
