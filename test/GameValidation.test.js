import CarNameValidation from '../src/validation/CarNameValidation';
import TryCountValidation from '../src/validation/TryCountValidation';

describe('[검증 기능] - 사용자 입력에 대한 예외(자동차 이름)', () => {
  test('자동차 이름을 입력하지 않은 경우', () => {
    const result = CarNameValidation.checkIfEmpty('');

    expect(result).toBe(true);
  });

  test('콤마 사이에 공백 또는 빈 문자열일 경우(형식에 어긋날 경우)', () => {
    const result = CarNameValidation.checkIfInvalid('tesla,,');

    expect(result).toBe(true);
  });

  test('중복되는 자동차 이름이 존재할 경우', () => {
    const result = CarNameValidation.checkIfDuplicate('tesla,bmw,bmw');

    expect(result).toBe(true);
  });

  test('자동차 이름이 6자 이상일 경우', () => {
    const result = CarNameValidation.checkIfOverLength('lamborghini');

    expect(result).toBe(true);
  });
});

describe('[검증 기능] - 사용자 입력에 대한 예외(시도 횟수)', () => {
  test('숫자 형식에 어긋날 경우', () => {
    const count = ['', ' ', 'A', '6육'];

    count.map((val) => expect(TryCountValidation.checkIfInvalid(Number(val))).toBe(true));
  });

  test('시도 횟수가 0보다 큰 수가 아닐 경우', () => {
    const result = TryCountValidation.checkIfZeroOrLess(-1);

    expect(result).toBe(true);
  });
});
