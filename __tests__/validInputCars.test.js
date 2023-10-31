import { validateInputCars } from '../src/racingCars/utils/index.js';

describe('validateInputCars 함수를 테스트합니다.', () => {
  test('쉼표가 1개 이상 작성되어야 한다.', () => {
    const text = '전기자전거테슬라';
    expect(validateInputCars(text)).toEqual({
      isValid: false,
      reason: '쉼표로 구분되어 자동차명을 두대이상 작성해주세요.',
    });
  });
});
