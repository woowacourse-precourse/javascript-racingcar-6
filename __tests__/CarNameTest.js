import InputValidator from '../src/models/InputValidator.js';
import { ERROR_MESSAGES } from '../src/constants/index.js';

describe('자동차 이름 유효성 테스트', () => {
  it('자동차 이름이 5자 초과', () => {
    const carNames = ['Tesla', 'Hyundai'];

    expect(() => {
      InputValidator.validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGES.tooLongName);
  });

  it('자동차 이름을 의도적으로 입력하지 않음', () => {
    const carNames = ['Audi', ''];

    expect(() => {
      InputValidator.validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGES.emptyName);
  });

  it('글자 사이의 의도된 공백', () => {
    const carNames = ['be    nz'];

    expect(() => {
      InputValidator.validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGES.tooLongName);
  });

  it('특수문자 사용', () => {
    const carNames = ['K!A'];

    expect(() => {
      InputValidator.validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGES.noSpecialChar);
  });

  it('중복된 자동차 이름 입력', () => {
    const carNames = ['volvo', 'Volvo'];

    expect(() => {
      InputValidator.validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGES.noDuplicateName);
  });

  it('단일의 유효한 자동차 이름 입력', () => {
    const carNames = ['레인지로버'];

    expect(() => {
      InputValidator.validateCarNames(carNames);
    }).not.toThrow();
  });

  it('다수의 유효한 자동차 이름 입력', () => {
    const carNames = ['GV70', 'G80', 'G90'];

    expect(() => {
      InputValidator.validateCarNames(carNames);
    }).not.toThrow();
  });
});
