import MESSAGE from '../common/message.js';

const validateCarName = (input) => {
  const carNameArray = input.split(',').map((value) => value.trim());

  for (let i = 0; i < carNameArray.length; i += 1) {
    if (carNameArray[i].length > 5) {
      throw new Error(MESSAGE.errorName);
    }
  }

  const racingCar = carNameArray.map((value) =>
    value === '' ? 'unnamed' : value,
  );
  return racingCar;
};

export default validateCarName;
