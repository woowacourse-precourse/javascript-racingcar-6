import ERROR_MESSAGE from '../constant/ErrorMessage.js';

const carName = userInput => {
  const cars = userInput.split(',');

  if (userInput.includes(',') === false) {
    throw Error(ERROR_MESSAGE.INSUFFICIENT_CARS);
  }

  if (cars.length === 2 && cars[1] === '') {
    throw Error(ERROR_MESSAGE.INSUFFICIENT_CARS);
  }

  if (cars.find(car => car.length > 5)) {
    throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
  }
};

const playCount = userInput => {
  const nonNumericRegex = /[^0-9]/;

  if (nonNumericRegex.test(userInput)) {
    throw Error(ERROR_MESSAGE.NON_NUMERIC_PLAYCOUNT);
  }
  if (userInput <= 0) {
    throw Error(ERROR_MESSAGE.NON_POSITIVE_PLAYCOUNT);
  }
};
const validate = {
  carName,
  playCount,
};

export default validate;
