import {hasDuplicateString, isOnlySpace, isShorterThan5Chars, isValidCarNamesString} from '../src/validation.js';

describe('유효성 검사 함수', () => {
  describe('isShorterThan5Chars', () => {
    test('5자리 이하 문자열을 입력하면, true를 반환한다', () => {
      expect(isShorterThan5Chars('123')).toBe(true);
    })

    test('6자리 이상 문자열을 입력하면, false를 반환한다.', () => {
      expect(isShorterThan5Chars('123456')).toBe(false);
    })
  })

  describe('hasDuplicateString', () => {
    test('중복된 문자열을 갖는 배열을 입력하면 true를 반환한다.', () => {
      expect(hasDuplicateString(['foo', 'foo', 'bar'])).toBe(true);
    })

    test('중복된 문자열을 갖지 않는 배열을 입력하면 false를 반환한다.', () => {
      expect(hasDuplicateString(['foo', 'bar'])).toBe(false);
    })
  })

  describe('isOnlySpace', () => {
    test('공백만 포함된 문자열을 입력하면 true를 반환한다.', () => {
      expect(isOnlySpace('\t')).toBe(true);
      expect(isOnlySpace(' ')).toBe(true);
      expect(isOnlySpace(' a')).toBe(false);
    })
  })

  describe('isValidCarNamesString', () => {
    test('5자리 이상의 자동차 이름을 포함한 문자열을 입력하면 에러를 반환한다.', () => {
      expect(() => isValidCarNamesString('foo,bar,foobar')).toThrowError();
      expect(() => isValidCarNamesString('foobar')).toThrowError();
    })

    test('공백만으로 이루어진 자통자 이름을 포함한 문자열을 입력하면 에러를 반환한다.', () => {
      expect(() => isValidCarNamesString('foo, ,bar')).toThrowError();
    })

    test('중복된 자동차 이름을 포함한 문자열을 입력하면 에러를 반환한다.', () => {
      expect(() => isValidCarNamesString('foo,foo')).toThrowError();
    })

    test('중복된 이름 없이 5자리 이하 자동차 이름만을 포함한 문자열을 입력하면 true를 반환한다.', () => {
      expect(isValidCarNamesString('foo,bar')).toBe(true);
    })
  })
})