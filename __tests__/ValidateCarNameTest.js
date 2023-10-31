import { validateCarName } from '../src/utils/validate.js';
import { ERROR } from '../src/constants/constants.js';

describe('자동차 이름 입력값 검증 테스트', () => {
  test('이름을 올바르게 입력한 경우 예외가 발생하지 않음', () => {
    const carNames = ['sso', 'sona'];

    expect(() => validateCarName(carNames)).not.toThrow();
  });

  test.each([
    {
      names: ['sso'],
      test: '이름을 하나만 입력한 경우 예외 발생',
      expectedMessage: ERROR.invalidNumberOfNames,
    },
    {
      names: ['sso', 'sona', 'sso'],
      test: '중복된 이름을 입력한 경우 예외 발생',
      expectedMessage: ERROR.nameDuplicated,
    },
    {
      names: ['kimbori', 'abc', 'abcdef'],
      test: '5자 초과의 이름을 입력한 경우 예외 발생',
      expectedMessage: ERROR.invalidNameLength,
    },
    {
      names: ['', 'so'],
      test: '1자 미만의 이름을 입력한 경우 예외 발생',
      expectedMessage: ERROR.invalidNameLength,
    },
    {
      names: ['so!', '#tuna', 'bori*'],
      test: '이름에 특수문자가 포함되어 있는 경우 예외 발생',
      expectedMessage: ERROR.invalidNameType,
    },
  ])('$test', ({ names, expectedMessage }) => {
    expect(() => validateCarName(names)).toThrow(expectedMessage);
  });
});
