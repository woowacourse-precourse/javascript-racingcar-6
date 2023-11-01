import ERROR_MESSAGES from '../src/constants/ErrorMessages.js';
import validateCarNames from '../src/validators/validateCarNames.js';
import validateTryCount from '../src/validators/validateTryCount';

describe('자동차 이름들의 유효성을 검사하는 validateCarNames 함수 테스트', () => {
  test('이름이 0글자 이하인 자동차가 있을 경우 에러를 throw', () => {
    const TEST_INPUT = ['woong', '', 'gang'];

    expect(() => {
      validateCarNames(TEST_INPUT);
    }).toThrow(ERROR_MESSAGES.underNameLength);
  });

  test('이름이 5글자 이상인 자동차가 있을 경우 에러를 throw', () => {
    const TEST_INPUT = ['woong', 'gang', 'cocococo'];

    expect(() => {
      validateCarNames(TEST_INPUT);
    }).toThrow(ERROR_MESSAGES.overNameLength);
  });

  test('중복된 자동차 이름이 있을 경우 에러를 throw', () => {
    const TEST_INPUT = ['woong', 'gang', 'gang'];

    expect(() => {
      validateCarNames(TEST_INPUT);
    }).toThrow(ERROR_MESSAGES.duplicatedName);
  });

  test('모든 유효성 검사를 통과할 경우 에러를 throw 하지 않음', () => {
    const TEST_INPUT = ['woong', 'josh', 'gang', 'coco'];

    expect(() => {
      validateCarNames(TEST_INPUT);
    }).not.toThrow('[ERROR]');
  });
});

describe('자동차 경주 진행 횟수 유효성을 검사하는 validateTryCount 함수 테스트', () => {
  test('문자가 포함될 경우 에러를 throw', () => {
    const TEST_INPUT = 'ab1';

    expect(() => {
      validateTryCount(Number(TEST_INPUT));
    }).toThrow(ERROR_MESSAGES.invalidCountType);
  });

  test('진행 횟수가 1보다 작은 경우 에러를 throw', () => {
    const TEST_INPUT = '-10';

    expect(() => {
      validateTryCount(Number(TEST_INPUT));
    }).toThrow(ERROR_MESSAGES.invalidCountValue);
  });

  test('모든 유효성 검사를 통과할 경우 에러를 throw 하지 않음', () => {
    const TEST_INPUT = '5';

    expect(() => {
      validateTryCount(Number(TEST_INPUT));
    }).not.toThrow('[ERROR]');
  });
});
