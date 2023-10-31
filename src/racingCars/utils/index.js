import InputError from '../errors/InputError.js';
import { Console, Random } from '@woowacourse/mission-utils';
export function validateInputCars(cars) {
  console.log(typeof cars);
  console.log(cars.includes(','));
  if (!cars.includes(',')) {
    // throw new InputError('쉼표로 구분되어 자동차명을 두대이상 작성해주세요.');
    return {
      isValid: false,
      reason: '쉼표로 구분되어 자동차명을 두대이상 작성해주세요.',
    };
  }
  const carList = cars.split(',');
  console.log(carList);
  carList.forEach((car) => {
    console.log(car);
    if (car.length > 50) {
      return { isValid: false, reason: '자동차명은 5글자미만입니다.' };
    }
  });
  return { isValid: true, reason: '' };
}

export function makeHash(carsText) {
  const carsArr = carsText.split(',');
  const carList = {};
  carsArr.forEach((car) => (carList[car] = 0));
  return carList;
}

export function validateInputCount(count) {
  const intNumber = parseInt(count);
  console.log(intNumber);
  if (intNumber <= 0) {
    // throw new InputError('횟수는 1이상 이여야합니다.');
    return { isValid: false, reason: '횟수는 1이상 이여야합니다.' };
  }
  if (!Number.isSafeInteger(intNumber)) {
    // throw new InputError('양의 정수여야합니다.');
    return { isValid: false, reason: '양의 정수여야합니다.' };
  }
  return { isValid: true, value: intNumber };
}
