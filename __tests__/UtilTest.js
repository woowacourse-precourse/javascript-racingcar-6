import generateRandomNumber from '../src/utils/generateRandomNumber';

describe('✨ 유틸함수 테스트', () => {
  test('[generateRandomNumber] 반환 값은 0부터 9사이 범위에 있다.', () => {
    const randomNumber = generateRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  });

  test('[generateRandomNumber] 0부터 9사이 랜덤 값을 반환한다.', () => {
    const mockedGenerateRandomNumber = jest.fn();
    mockedGenerateRandomNumber.mockReturnValue(0);

    expect(mockedGenerateRandomNumber()).toBe(0);

    mockedGenerateRandomNumber.mockReturnValue(2);
    expect(mockedGenerateRandomNumber()).toBe(2);

    mockedGenerateRandomNumber.mockReturnValue(3);
    expect(mockedGenerateRandomNumber()).toBe(3);

    mockedGenerateRandomNumber.mockReturnValue(9);
    expect(mockedGenerateRandomNumber()).toBe(9);
  });
});
