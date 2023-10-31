import { isValidCarName, isValidAttempts } from '../src/utils/Validation.js'; 

describe('유효성 검사 함수', () => {
  describe('isValidCarName', () => {
    test('유효한 자동차 이름에 대해 true를 반환', () => {
      expect(isValidCarName('pobi,woni,jun')).toBe(true);
    });

    test('자동차 이름의 길이가 5를 초과하는 경우 false를 반환', () => {
      expect(isValidCarName('pobi,woni,junlaon')).toBe(false);
    });

    test('중복된 자동차 이름인 경우 false를 반환', () => {
      expect(isValidCarName('pobi,pobi,jun')).toBe(false);
    });
  });

  describe('isValidAttempts', () => {
    test('유효한 숫자가 0보다 큰 경우 true를 반환', () => {
      expect(isValidAttempts('3')).toBe(true);
    });

    test('숫자가 아닌 값인 경우 false를 반환', () => {
      expect(isValidAttempts('문자')).toBe(false);
    });

    test('0 이하의 숫자인 경우 false를 반환', () => {
      expect(isValidAttempts('-1')).toBe(false);
    });
  });
});
