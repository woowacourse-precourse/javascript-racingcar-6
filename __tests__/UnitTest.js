import { createRandomList } from '../src/utils/createRandomList';
import { validateLength, validateIsNumber } from '../src/utils/validate';

describe('예외 테스트', () => {
  test('자동차 이름 길이 예외 검사', () => {
    const carName = 'Juru99,Juru100';
    validateLength(carName);
  });

  test('자동차 이동 횟수 예외 검사', () => {
    const moveCount = 'ab1';
    validateIsNumber(moveCount);
  });
});

describe('유틸리티 함수', () => {
  test('무작위 숫자 생성', () => {
    const moveCount = '5';
    const randomList = createRandomList(moveCount);
    randomList.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(10);
    });
  });
});
