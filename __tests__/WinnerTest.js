import winner from '../src/winner';

describe('우승자 반환', () => {
  test('[우승자 반환] 우승자 정상 반환', () => {
    // Arrange
    const carName = new Map([
      ['pobi', '--'],
      ['jun', '-'],
    ]);
    // Act
    const result = winner(carName);
    // Assert
    expect(result).toBe('최종 우승자 : pobi');
  });
  test('[우승자 반환] 공동 우승자 반환', () => {
    // Arrange
    const carName = new Map([
      ['pobi', '--'],
      ['jun', '--'],
    ]);
    // Act
    const result = winner(carName);
    // Assert
    expect(result).toBe('최종 우승자 : pobi, jun');
  });
});
