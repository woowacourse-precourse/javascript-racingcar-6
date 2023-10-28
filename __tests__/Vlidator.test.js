import {
  isDelimiter,
  isDuplication,
  isLanguageValid,
  isNameLength,
  isQuantityValid,
  isValidCount,
} from '../src/utils/validator/utils/index.js';

describe('validator test', () => {
  describe('isDelimiter', () => {
    test('쉼표 구분자를 가지고 있을 때 true를 리턴한다.', () => {
      expect(isDelimiter('fobi,koko,noa')).toBe(true);
    });

    test(' 쉼표 구분자를 가지고 있지 않을 때 false를 리턴한다.', () => {
      expect(isDelimiter('fobi.koko.noa')).toBe(false);
    });
  });

  describe('isNameLength', () => {
    test('이름의 글자수가 조건에 맞을 때 true를 리턴한다.', () => {
      expect(isNameLength('fobi,koko,noa')).toBe(true);
    });

    test('이름의 글자수가 조건에 맞을 때 false를 리턴한다.', () => {
      expect(isNameLength('fobifobi,kakao,no')).toBe(false);
    });
  });

  describe('isLanguageValid', () => {
    test.each([
      ['fobi,woowa,tomll', true],
      ['로비,토카,치치', true],
      ['fobi,로비,치fibo', true],
    ])('허용되는 언어를 사용하였을 때 true 리턴한다', (input, expected) => {
      expect(isLanguageValid(input)).toBe(expected);
    });

    test.each([
      ['fobi,@#%$,fe@#', false],
      ['fobi,to2od,고고', false],
      ['고고,고롱,2투', false],
    ])('허용되지 않는 언어 또는 특수문자를 사용하였을 때 false를 리턴한다.', (input, expected) => {
      expect(isLanguageValid(input)).toBe(expected);
    });
  });

  describe('isDuplication', () => {
    test('중복되는 이름이 존재할 때 true 리턴', () => {
      expect(isDuplication('도레미,미미미,도레미')).toBe(true);
    });

    test('중복되는 이름이 존재하지 않을 때 false 리턴', () => {
      expect(isDuplication('fobi,toto,lala')).toBe(false);
    });
  });

  describe('isValidCount', () => {
    test('유효한 횟수를 입력하였을 때 true 리턴', () => {
      expect(isValidCount('3')).toBe(true);
    });

    test.each([
      ['33', false],
      ['#@$', false],
      ['삼십', false],
      ['one', false],
    ])('유효한 횟수를 입력하지 않았을 때 false 리턴', (input, expected) => {
      expect(isValidCount(input)).toBe(expected);
    });
  });
});
