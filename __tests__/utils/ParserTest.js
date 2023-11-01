/* eslint-disable no-undef */
import Parser from '../../src/utils/Parser.js';

describe('파서', () => {
  describe('stringToArray', () => {
    test('빈 문자열이 입력되면 에러를 발생시켜야 한다', () => {
      // given
      const input = '';

      // when
      // then
      expect(() => {
        Parser.stringToArray(input);
      }).toThrow('[ERROR]');
    });

    test('콤마로 구분된 문자열이 입력되면 분리된 배열을 반환해야 한다.', () => {
      // given
      const input = 'a,b,c';
      const expected = ['a', 'b', 'c'];
      // when
      // then
      expect(Parser.stringToArray(input)).toEqual(expected);
    });
  });

  describe('stringToNumber', () => {
    test('빈 문자열이 입력되면 에러를 일으켜야 한다.', () => {
      // given
      const input = '';

      // when
      // then
      expect(() => {
        Parser.stringToNumber(input);
      }).toThrow('[ERROR]');
    });

    test('숫자를 나타내는 문자열이 입력되면 변환된 숫자를 반환하여야 한다.', () => {
      // given
      const input = '123';
      const expected = 123;

      // when
      // then
      expect(Parser.stringToNumber(input)).toEqual(expected);
    });
  });
});
