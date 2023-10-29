import { ERROR } from '../src/constants/constant.js';
import {
  userInputTryNumberError,
  userInputCarNameFormError,
  userInputCarNameLengthError,
  userInputCarNameOverlapError,
} from '../src/domain/Error.js';

// Jest 테스트 스위트 시작
describe('userInputTryNumberError 함수 테스트', () => {
  // 0 이하인 경우 오류가 throw되어야 함
  test('0 이하인 경우 오류 throw', () => {
    expect(() => userInputTryNumberError(-1)).toThrowError(ERROR.ERROR_TYPE);
    expect(() => userInputTryNumberError(0)).toThrowError(ERROR.ERROR_TYPE);
  });

  // 0 이상인 경우 오류가 throw되지 않아야 함
  test('0 이상인 경우 오류 throw 안 됨', () => {
    expect(() => userInputTryNumberError(1)).not.toThrow();
    expect(() => userInputTryNumberError(100)).not.toThrow();
  });

  // 숫자인 경우 오류가 throw되지 않아야 함
  test('정수형 숫자인 경우 오류 throw 안 됨', () => {
    expect(() => userInputTryNumberError(123)).not.toThrow();
    expect(() => userInputTryNumberError(1)).not.toThrow();
  });

  // 숫자가 아닌 경우 오류가 throw되어야 함
  test('숫자가 아닌 경우 또는 정수형이 아닐 경우 오류 throw', () => {
    expect(() => userInputTryNumberError(45.67)).toThrowError(ERROR.ERROR_TYPE);
    expect(() => userInputTryNumberError('문자열')).toThrowError(ERROR.ERROR_TYPE);
    expect(() => userInputTryNumberError(null)).toThrowError(ERROR.ERROR_TYPE);
    expect(() => userInputTryNumberError(undefined)).toThrowError(ERROR.ERROR_TYPE);
    expect(() => userInputTryNumberError(NaN)).toThrowError(ERROR.ERROR_TYPE);
  });
});

describe('getCarName 함수 테스트', () => {
  test('공백이 포함될 경우 오류 throw', () => {
    expect(() => userInputCarNameFormError('a b c')).toThrowError(ERROR.ERROR_SPACE);
    expect(() => userInputCarNameFormError('de f')).toThrowError(ERROR.ERROR_SPACE);
  });

  test('이름 길이가 5를 초과할 때 오류 throw', () => {
    expect(() => userInputCarNameLengthError(['abcd', 'abcdef', 'jun'])).toThrowError(
      ERROR.ERROR_LONG_LENGTH,
    );
    expect(() => userInputCarNameLengthError(['abcdef', 'abcdefg', 'jun'])).toThrowError(
      ERROR.ERROR_LONG_LENGTH,
    );
  });

  test('이름 개수가 2개 미만일 때 오류 throw', () => {
    expect(() => userInputCarNameLengthError(['abcd'])).toThrowError(ERROR.ERROR_SHORT_LENGTH);
    expect(() => userInputCarNameLengthError([])).toThrowError(ERROR.ERROR_SHORT_LENGTH);
  });

  test('이름에 특수문자가 포함되면 오류 throw', () => {
    expect(() => userInputCarNameLengthError(['a./c', 'abcd', 'qwe'])).toThrowError(
      ERROR.ERROR_TYPE,
    );
    expect(() => userInputCarNameLengthError(['./$#', '$@#!'])).toThrowError(ERROR.ERROR_TYPE);
  });

  test('이름이 중복될 때 오류 throw', () => {
    expect(() => userInputCarNameOverlapError(['abcd', 'abcd', 'aaaaa'])).toThrowError(
      ERROR.ERROR_OVERLAP,
    );
    expect(() => userInputCarNameOverlapError(['aaaaa', 'abcd', 'abcd'])).toThrowError(
      ERROR.ERROR_OVERLAP,
    );
  });
});
