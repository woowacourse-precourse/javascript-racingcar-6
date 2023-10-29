import InputError from '../errors/InputError.js';
export function validateInputCars(cars) {
  if (!cars.includes(',')) {
    throw '쉼표로 구분되어 자동차명을 두대이상 작성해주세요.';
  }
  return true;
}

export function makeHash(carsText) {
  const carsArr = carsText.split(',');
  const CarList = {};
  carsArr.forEach((car) => (CarList[car] = 0));
  return CarList;
}

export function validateInputCount(count) {
  //숫자여야 하며, 0은 받을 수 없다.

  if (Number.isSafeInteger(Number(count)) && Number(count) > 0) {
    return true;
  }
  throw '시도 횟수는 양의 정수여야 합니다';
}
