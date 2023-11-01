/* eslint-disable no-undef */
import UtilArray from '../../src/utils/UtilArray.js';

describe('UtilArray', () => {
  describe('hasEmpty', () => {
    test('배열이 비어있는 경우 true를 반환해야 한다.', () => {
      expect(UtilArray.hasEmpty([])).toBe(true);
    });

    test('배열에 빈 문자열이 포함된 경우 true를 반환해야 한다.', () => {
      expect(UtilArray.hasEmpty(['', 'b', 'c'])).toBe(true);
    });

    test('배열에 빈 문자열이 없는 경우 false를 반환해야 한다.', () => {
      expect(UtilArray.hasEmpty(['a', 'b', 'c'])).toBe(false);
    });
  });

  describe('hasDuplicated', () => {
    test('배열에 중복된 요소가 있는 경우 true를 반환해야 한다.', () => {
      expect(UtilArray.hasDuplicated(['a', 'b', 'a'])).toBe(true);
    });

    test('배열에 중복된 요소가 없는 경우 false를 반환해야 한다.', () => {
      expect(UtilArray.hasDuplicated(['a', 'b', 'c'])).toBe(false);
    });
  });
});
