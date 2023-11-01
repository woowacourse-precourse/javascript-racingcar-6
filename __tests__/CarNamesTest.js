import { describe } from 'node:test';
import InputValidator from '../src/models/InputValidator';
import { ERROR_MESSAGE } from '../src/constants';

describe('자동차 이름 유효성 테스트', () => {
  test('자동차 이름 5자 초과', () => {
    const carNames = ['KIA', 'Volvo', 'Ferrari'];

    expect(() => {
      InputValidator.validateCarName(carNames);
    }).toThrow(ERROR_MESSAGE.tooLongName);
  });

  test('자동차 이름을 입력하지 않음', () => {
    const carNames = ['Tesla', ''];

    expect(() => {
      InputValidator.validateCarName(carNames);
    }).toThrow(ERROR_MESSAGE.emptyName);
  });

  test('자동차 이름을 아무것도 입력하지 않음', () => {
    const carNames = [''];

    expect(() => {
      InputValidator.validateCarName(carNames);
    }).toThrow(ERROR_MESSAGE.emptyName);
  });

  test('한 개의 유효한 입력', () => {
    const carNames = ['링컨'];

    expect(() => {
      InputValidator.validateCarName(carNames);
    }).not.toThrow();
  });

  test('다수의 유효한 입력', () => {
    const carNames = ['g70', 'g80', 'g90', '토요타'];

    expect(() => {
      InputValidator.validateCarName(carNames);
    }).not.toThrow();
  });
});
