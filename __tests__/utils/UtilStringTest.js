/* eslint-disable no-undef */
import UtilString from '../../src/utils/UtilString.js';
import { MAX_NAME_LENGTH } from '../../src/constants/numeric.js';

describe('UtilString', () => {
  describe('isOverMaxLength', () => {
    test('값의 길이가 최대 길이를 초과하는 경우 true를 반환해야 한다', () => {
      const input = 'a'.repeat(MAX_NAME_LENGTH + 1);
      expect(UtilString.isOverMaxLength(input)).toBe(true);
    });

    test('값의 길이가 최대 길이를 초과하지 않는 경우 false를 반환해야 한다', () => {
      const input = 'a'.repeat(MAX_NAME_LENGTH);
      expect(UtilString.isOverMaxLength(input)).toBe(false);
    });
  });

  describe('isEmptyString', () => {
    test('값이 비어있거나 공백만 있는 경우 true를 반환해야 한다', () => {
      expect(UtilString.isEmptyString('')).toBe(true);
      expect(UtilString.isEmptyString(' ')).toBe(true);
    });

    test('값이 비어있지 않은 경우 false를 반환해야 한다', () => {
      expect(UtilString.isEmptyString('a')).toBe(false);
    });
  });
});
