import { validateInputCars } from '../src/racingCars/utils/index.js';

describe('validateInputCars 함수를 테스트합니다.', () => {
  test('쉼표가 1개 이상 작성되어야 한다.', () => {
    const text = '전기자전거테슬라';
    expect(() => validateInputCars(text)).toThrow();
  });
});
