import CarNamesValidator from '../src/models/CarNamesValidator.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';

describe('자동차 이름 유효성 테스트', () => {
  const carNamesValidator = new CarNamesValidator();

  test('자동차 이름이 5자 초과', () => {
    const carNames = ['pobi', 'javaji'];

    expect(() => {
      carNamesValidator.isValid(carNames);
    }).toThrow(ERROR_MESSAGES.exceedName);
  });

  test('자동차 이름을 의도적으로 입력하지 않음', () => {
    const carNames = ['Audi', ''];

    expect(() => {
      carNamesValidator.isValid(carNames);
    }).toThrow(ERROR_MESSAGES.emptyName);
  });

  test('글자 사이의 의도된 공백', () => {
    const carNames = ['be    nz'];

    expect(() => {
      carNamesValidator.isValid(carNames);
    }).toThrow(ERROR_MESSAGES.exceedName);
  });

  test('특수문자 사용', () => {
    const carNames = ['K!A'];

    expect(() => {
      carNamesValidator.isValid(carNames);
    }).toThrow(ERROR_MESSAGES.noSpecialChar);
  });

  test('중복된 자동차 이름 입력', () => {
    const carNames = ['volvo', 'volvo'];

    expect(() => {
      carNamesValidator.isValid(carNames);
    }).toThrow(ERROR_MESSAGES.duplicatedName);
  });

  test('하나의 자동차 이름 입력', () => {
    const carNames = ['SM7'];

    expect(() => {
      carNamesValidator.isValid(carNames);
    }).toThrow(ERROR_MESSAGES.minNameCount);
  });

  test('다수의 유효한 자동차 이름 입력', () => {
    const carNames = ['GV70', 'G80', 'G90'];

    expect(() => {
      carNamesValidator.isValid(carNames);
    }).not.toThrow();
  });
});
