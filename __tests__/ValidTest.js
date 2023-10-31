import { isValidCarNames, isValidAttempt } from '../src/validate.js';

describe('자동차 경주 게임 입력 검사', () => {
  describe('자동차 이름 입력에 대한 예외 처리', () => {
    test('자동차는 2대 이상이어야 합니다', () => {
      const input = ['pobi'];
      expect(() => isValidCarNames(input)).toThrow('[ERROR] 자동차는 2대 이상이어야 합니다.');
    });

    test('자동차 이름은 5자를 초과할 수 없습니다', () => {
      const input = ['pobi', 'woni', 'woowacourse'];
      expect(() => isValidCarNames(input)).toThrow(
        '[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.'
      );
    });

    test('올바른 이름을 입력해야 합니다', () => {
      const input = ['pobi', ''];
      expect(() => isValidCarNames(input)).toThrow('[ERROR] 올바른 이름을 입력하세요.');
    });
  });

  describe('시도 횟수 입력 예외 처리', () => {
    test('시도할 횟수는 1 이상의 숫자이어야 합니다', () => {
      const input = [0, -1, 'test'];
      input.forEach((input) => {
        expect(() => isValidAttempt(input)).toThrow(
          '[ERROR] 시도할 횟수는 1 이상의 숫자이어야 합니다.'
        );
      });
    });
  });
});
