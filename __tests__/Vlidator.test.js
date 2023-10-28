import { isDelimiter, isNameLength } from '../src/utils/validator/utils';

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
      expect(isNameLength('fobifobi', 'kakao', 'no')).toBe(false);
    });
  });
});
