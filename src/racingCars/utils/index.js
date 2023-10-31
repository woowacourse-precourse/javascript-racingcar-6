import InputError from '../errors/InputError.js';
import { Console, Random } from '@woowacourse/mission-utils';
export function validateInputCars(cars) {
  console.log(typeof cars);
  console.log(cars.includes(','));
  if (!cars.includes(',')) {
    throw new InputError('쉼표로 구분되어 자동차명을 두대이상 작성해주세요.');
  }
  const carList = cars.split(',');
  console.log(carList);
  carList.forEach((car) => {
    console.log(car);
    if (car.length >= 5) {
      throw new InputError('자동차명은 5글자미만입니다.');
    }
  });
}

export function makeHash(carsText) {
  const carsArr = carsText.split(',');
  const carList = {};
  carsArr.forEach((car) => (carList[car] = 0));
  return carList;
}

export function validateInputCount(count) {
  console.log(!Number.isSafeInteger(Number(count)));
  console.log(Number(count) <= 0);
  if (!Number.isSafeInteger(Number(count)) || Number(count) <= 0) {
    return { isValid: false, reason: '숫자여야 하며, 0은 받을 수 없다.' };
  }
  return {
    isValid: true,
  };
}
