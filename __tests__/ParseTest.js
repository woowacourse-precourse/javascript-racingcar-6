import { parseCarNames, parseNumberOfAttempts } from '../src/parse';

describe('자동차 이름 파싱', () => {
  test('성공', () => {
    function trySuccess() {
      const input = 'adam,becky,chloe,dan';

      return parseCarNames(input);
    }

    expect(trySuccess()).toEqual(['adam', 'becky', 'chloe', 'dan']);
  });

  test('쉼표 두 개 이상이 붙은 경우', () => {
    function tryMultipleCommas() {
      const input = 'adam,,becky';
      parseCarNames(input);
    }

    expect(tryMultipleCommas).toThrow('[ERROR]');
  });

  test('입력받은 가장 첫 문자가 쉼표인 경우', () => {
    function tryFirstCharacterComma() {
      const input = ',adam,becky';
      parseCarNames(input);
    }

    expect(tryFirstCharacterComma).toThrow('[ERROR]');
  });

  test('입력받은 가장 마지막 문자가 쉼표인 경우', () => {
    function tryLastCharacterComma() {
      const input = 'adam,becky,';
      parseCarNames(input);
    }

    expect(tryLastCharacterComma).toThrow('[ERROR]');
  });

  test('이름에 의미없는 공백이 존재하는 경우', () => {
    function tryBlankCharacter() {
      const input = '   adam   ,  becky  ';
      parseCarNames(input);
    }

    expect(tryBlankCharacter).toThrow('[ERROR]');
  });

  test('중복된 이름이 입력된 경우', () => {
    function tryDuplicateName() {
      const input = 'adam,adam';
      parseCarNames(input);
    }

    expect(tryDuplicateName).toThrow('[ERROR]');
  });

  test('이름이 하나만 입력된 경우', () => {
    function tryOnlyOneName() {
      const input = 'adam';
      parseCarNames(input);
    }

    expect(tryOnlyOneName).toThrow('[ERROR]');
  });

  test('요구 사항의 제한보다 길이가 긴 이름이 입력된 경우', () => {
    function tryLongerThanLimit() {
      const input = 'adam,becky,christopher';
      parseCarNames(input);
    }

    expect(tryLongerThanLimit).toThrow('[ERROR]');
  });
});

describe('시도 횟수 파싱', () => {
  test('성공', () => {
    function trySuccess() {
      const input = '5';
      return parseNumberOfAttempts(input);
    }

    expect(trySuccess()).toEqual(5);
  });

  test('소수 형태로 입력한 경우', () => {
    function tryDecimal() {
      const input = '12.5';
      parseNumberOfAttempts(input);
    }

    expect(tryDecimal).toThrow('[ERROR]');
  });

  test('정수로 변환할 수 없는 값을 입력한 경우', () => {
    function tryInvalidValue() {
      const input = 'invalidValue';
      parseNumberOfAttempts(input);
    }

    expect(tryInvalidValue).toThrow('[ERROR]');
  });

  test('안전한 정숫값보다 큰 정수를 입력한 경우', () => {
    function tryNotSafeInteger() {
      const input = '9007199254740992';
      parseNumberOfAttempts(input);
    }

    expect(tryNotSafeInteger).toThrow('[ERROR]');
  });
});
