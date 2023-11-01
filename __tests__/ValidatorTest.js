import Validator from '../src/RacingCarGame/Validator/index.js';

describe('Validator 클래스 테스트', () => {
  test('자동차 이름이 5글자 이하로 중복되지 않게 입력되었을 때 validateCarNames, isValidCarNameLength 함수를 테스트한다.', () => {
    const names = 'alpha,beta,omega';

    expect(() => Validator.validateCarNames(names)).not.toThrow();
  });

  test('자동차 이름이 5글자 초과로 입력되거나 빈 문자열만 입력되었을 때 validateCarNames, isValidCarNameLength 함수를 테스트한다.', () => {
    const nameArr = ['alphaasdf,betaff,omegagg', ', , , '];

    nameArr.forEach((names) => {
      expect(() => Validator.validateCarNames(names)).toThrow();
    });
  });

  test('자동차 이름이 빈 문자열과 함께 입력되었을 때 validateCarNames, isValidCarNameLength 함수를 테스트한다.', () => {
    const names = ', , abc';

    expect(() => Validator.validateCarNames(names)).not.toThrow();
  });

  test('중복된 자동차 이름이 입력되었을 때 validateCarNames, validateCarNameDuplication 함수를 테스트한다.', () => {
    const names = 'abc,abc';

    expect(() => Validator.validateCarNames(names)).toThrow();
  });

  test('시도횟수에 음수가 입력되었을 때 validateLapCount, isSafeInteger 함수를 테스트한다.', () => {
    const lapCount = '-1';

    expect(() => Validator.validateLapCount(lapCount)).toThrow();
  });

  test('시도횟수에 숫자가 아닌 값이 입력되었을 때 validateLapCount, isSafeInteger 함수를 테스트한다.', () => {
    const lapCount = 'abc11';

    expect(() => Validator.validateLapCount(lapCount)).toThrow();
  });

  test('시도횟수에 안전한 정수가 입력되었을 때 validateLapCount, isSafeInteger 함수를 테스트한다.', () => {
    const lapCount = '2100000000';

    expect(() => Validator.validateLapCount(lapCount)).not.toThrow();
  });
});
