import generateRandomNumber from '../src/utils/generateRandomNumber';

describe('✨ 유틸함수 테스트', () => {
  test('[generateRandomNumber] 반환 값은 0부터 9사이 범위에 있다.', () => {
    const randomNumber = generateRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  });
});
