import Car from '../../src/models/Car.js';
import AppError from '../../src/error/AppError.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessages.js';

describe('각각의 자동차 이름을 담당하는 클래스에 대한 테스트', () => {
  test('정상적인 입력값이 들어갔을 때, 정상적으로 자동차 이름을 반환한다.', () => {
    const carName = 'pobi';
    const car = new Car(carName);
    const result = car.getCar();

    expect(result).toBe(carName);
  });

  test('자동차 이름에 공백이 포함되었을 때, 예외가 발생한다.', () => {
    const carName = 'po bi';

    expect(() => {
      new Car(carName);
    }).toThrow(new AppError(ERROR_MESSAGES.have_a_space));
  });

  test('자동차 이름이 공백일때 예외가 발생한다.', () => {
    const carName = '';

    expect(() => {
      new Car(carName);
    }).toThrow(new AppError(ERROR_MESSAGES.have_a_space));
  });

  test('자동차 이름에 한글, 영어, 숫자 외 문자가 입력됐을때 예외가 발생한다.', () => {
    const carName = '@#pob';

    expect(() => {
      new Car(carName);
    }).toThrow(new AppError(ERROR_MESSAGES.invalid_characters));
  });

  test('자동차 이름이 5자를 초과했을 때, 예외가 발생한다.', () => {
    const carName = 'pobipobi';

    expect(() => {
      new Car(carName);
    }).toThrow(new AppError(ERROR_MESSAGES.out_of_range_of_names));
  });
});
