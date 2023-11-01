import {
  validateName,
  validateUniqueNames,
  validateTrialNumber,
} from '../src/utils/validation.js';
import { ERRORS } from '../src/utils/constants.js';

describe('validation 테스트', () => {
  test('racingCarNames가 중복되지 않은 이름 테스트', () => {
    expect(() => validateUniqueNames(['name1', 'name2'])).not.toThrow();
  });

  test('racingCarNames가 중복된 이름 테스트', () => {
    expect(() => validateUniqueNames(['name', 'name'])).toThrow(
      ERRORS.DUPLICATE_NAME
    );
  });

  test('racingCarName이 유효한 이름일 때 테스트', () => {
    expect(() => validateName('name')).not.toThrow();
  });

  test('racingCarName가 빈 값일 때 테스트', () => {
    expect(() => validateName('')).toThrow(ERRORS.INVALID_NAME);
  });

  test('racingCarName가 5자 이상의 이름일 때 테스트', () => {
    expect(() => validateName('longname')).toThrow(ERRORS.INVALID_NAME);
  });

  test('trialNumber가 1 이상의 숫자일 때 유효 숫자 테스트', () => {
    expect(() => validateTrialNumber(5)).not.toThrow();
  });

  test('trialNumber가 0일 때 숫자 테스트', () => {
    expect(() => validateTrialNumber(0)).toThrow(ERRORS.INVALID_TRIAL_NUMBER);
  });

  test('trialNumber가 문자열 일 때 테스트', () => {
    expect(() => validateTrialNumber('two')).toThrow(
      ERRORS.INVALID_TRIAL_NUMBER
    );
  });
});
