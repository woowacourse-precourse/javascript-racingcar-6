import {
  validateCarNameLength,
  validateTypeNumber,
} from '../src/utils/validate';

describe('예외 테스트', () => {
  test('자동차 이름 길이 예외 검사', () => {
    const carName = 'Juru99,Juru100';
    validateCarNameLength(carName);
  });

  test('자동차 이동 횟수 예외 검사', () => {
    const count = 'ab1';
    validateTypeNumber(count);
  });
});
