import { validateCarNameLength } from '../src/utils/validate';

describe('예외 테스트', () => {
  test('자동차 이름 길이 예외 검사', () => {
    const carName = 'Juru99,Juru100';
    validateCarNameLength(carName);
  });

  test('자동차 이동 횟수 예외 검사', () => {
    const inputs = ['pobi,woni', 'ab1'];
    const count = Number(inputs[1]);

    expect(Number.isNaN(count)).toBe(true);
  });
});
