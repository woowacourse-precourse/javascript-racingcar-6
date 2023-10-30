import { validateCarName } from '../src/utils/validate.js';
import { ERROR } from '../src/constants/constants.js';

describe('자동차 이름 입력값 검증 테스트', () => {
  test('이름을 올바르게 입력한 경우 예외가 발생하지 않음', () => {
    const carNames = ['sso', 'sona'];
    const result = () => validateCarName(carNames);

    expect(result).not.toThrow();
  });

  test('이름을 하나만 입력한 경우 예외 발생', () => {
    const carNames = ['sso'];
    const result = () => validateCarName(carNames);

    expect(result).toThrow(ERROR.invalidNumberOfNames);
  });

  test('중복된 이름을 입력한 경우 예외 발생', () => {
    const carNames = ['sso', 'sona', 'sso'];
    const result = () => validateCarName(carNames);

    expect(result).toThrow(ERROR.nameDuplicated);
  });

  test('5자 초과의 이름을 입력한 경우 예외 발생', () => {
    const carNames = ['kimbori', 'abc', 'abc'];
    const result = () => validateCarName(carNames);

    expect(result).toThrow(ERROR.invalidNameLength);
  });

  test('1자 미만의 이름을 입력한 경우 예외 발생', () => {
    const carNames = ['', 'so'];
    const result = () => validateCarName(carNames);

    expect(result).toThrow(ERROR.invalidNameLength);
  });
});
