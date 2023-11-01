import {
    isWithinFourToNine,
    isDecimalChar,
    isValidateNumber,
    isNumberWithinBounds,
    isLengthWithinBounds,
    isDuplicateString,
    isContainString,
    isEmptyString,
} from '../../src/utility/validation';
import { ERROR_MESSAGE } from '../../src/constant/message';
  
  describe('유효성 함수 테스트', () => {
    test('입력이 유효한 숫자인지 테스트', () => {
      expect(() => isValidateNumber(42)).not.toThrowError();
      expect(() => isValidateNumber('123')).not.toThrowError();
      expect(() => isValidateNumber('abc')).toThrowError(
        ERROR_MESSAGE.wrongGameCountInput,
      );
      expect(() => isValidateNumber(' .')).toThrowError(
        ERROR_MESSAGE.wrongGameCountInput,
      );
      expect(() => isValidateNumber('*2')).toThrowError(
        ERROR_MESSAGE.wrongGameCountInput,
      );
    });
  
    test('주어진 범위 내에 주어진 수가 존재하는지 테스트', () => {
      expect(() => isNumberWithinBounds(10, 5, 15)).not.toThrowError();
      expect(() => isNumberWithinBounds(20, 5, 15)).toThrowError(
        ERROR_MESSAGE.wrongGameCountInput,
      );
    });
  
    test('주어진 문자열의 길이가 주어진 범위 내에 있는지 테스트', () => {
      expect(() => isLengthWithinBounds('abc', 1, 5)).not.toThrowError();
      expect(() => isLengthWithinBounds('abcdef', 1, 5)).toThrowError(
        ERROR_MESSAGE.wrongNameInput,
      );
    });
  
    test('주어진 문자열 하나가 0 ~ 9 사이의 10진수 자리수를 나타내는지 테스트', () => {
      expect(isDecimalChar('0')).toEqual(true);
      expect(isDecimalChar('')).toEqual(false);
      expect(isDecimalChar('-1')).toEqual(false);
      expect(isDecimalChar('sdf')).toEqual(false);
      expect(isDecimalChar('27')).toEqual(false);
    });
  
    test('주어진 숫자가 4 ~ 9 사이의 수인지 테스트', () => {
      expect(isWithinFourToNine(9)).toEqual(true);
      expect(isWithinFourToNine(0)).toEqual(false);
      expect(isWithinFourToNine(-1)).toEqual(false);
      expect(isWithinFourToNine(10)).toEqual(false);
    });
  
    test('주어진 문자열이 배열에 이미 존재하는지 테스트', () => {
      const stringSet = ['apple', 'banana', 'cherry'];
      expect(() => isDuplicateString('banana', stringSet)).toThrowError(
        ERROR_MESSAGE.duplicateNameInput,
      );
      expect(() => isDuplicateString('grape', stringSet)).not.toThrowError();
    });
  
    test('주어진 문자열에 주어진 구분자가 존재하는지 테스트', () => {
      expect(() => isContainString('asdf', ' ')).toThrowError(
        ERROR_MESSAGE.wrongNameInput,
      );
      expect(() => isContainString('123x', '123x')).not.toThrowError();
      expect(() => isContainString('안녕.,', '안녕.')).not.toThrowError();
      expect(() => isContainString(' ', '   ')).toThrowError(
        ERROR_MESSAGE.wrongNameInput,
      );
    });
  
    test('문자열이 공백인지 테스트', () => {
      // 공백 문자열도 공백으로 처리
      expect(() =>
        isEmptyString('  ', ERROR_MESSAGE.wrongGameCountInput),
      ).toThrowError(ERROR_MESSAGE.wrongGameCountInput);
      expect(() => isEmptyString('', ERROR_MESSAGE.wrongNameInput)).toThrowError(
        ERROR_MESSAGE.wrongNameInput,
      );
      expect(() => isEmptyString(' .', '빈 문자열이 아니다')).not.toThrowError();
    });
});