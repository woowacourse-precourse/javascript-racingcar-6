import InputError from '../errors/InputError';
export function validateInputCars(cars) {
  // - [ ] 1-1. 쉼표,를 기준으로 구분한다.
  // - [ ] 1-5. 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.
  if (!cars.includes(',')) {
    throw new InputError('쉼표로 자동차명을 구분해주세요.');
  }
  return true;
}
