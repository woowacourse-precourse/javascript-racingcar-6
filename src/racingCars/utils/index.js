import InputError from '../errors/InputError.js';
export function validateInputCars(cars) {
  if (!cars.includes(',')) {
    console.log('동작');
    // return {
    //   isValid: false,
    //   reason: '쉼표로 구분되어 자동차명을 두대이상 작성해주세요.',
    // };
    throw new InputError('쉼표로 구분되어 자동차명을 두대이상 작성해주세요.');
  }
  return {
    isValid: true,
  };
}

export function makeHash(carsText) {
  const carsArr = carsText.split(',');
  const CarList = {};
  carsArr.forEach((car) => (CarList[car] = 0));
  return CarList;
}

export function validateInputCount(count) {
  //숫자여야 하며, 0은 받을 수 없다.
  if (!Number.isSafeInteger(Number(count)) || Number(count) <= 0) {
    return { isValid: false, reason: '숫자여야 하며, 0은 받을 수 없다.' };
  }
  return {
    isValid: true,
  };
}
