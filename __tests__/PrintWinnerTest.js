import { MissionUtils } from '@woowacourse/mission-utils';
import printWinner from '../src/View/printWinner';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('우승자 반환', () => {
  test('[우승자 반환] 단독 우승자 반환', () => {
    // Arrange
    const carName = new Map([
      ['pobi', '--'],
      ['jun', '-'],
    ]);
    const logSpy = getLogSpy();
    // Act
    printWinner(carName);
    // Assert
    const expectedResult = '최종 우승자 : pobi';
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedResult));
  });
  test('[우승자 반환] 공동 우승자 반환', () => {
    // Arrange
    const carName = new Map([
      ['pobi', '--'],
      ['jun', '--'],
    ]);
    const logSpy = getLogSpy();
    // Act
    printWinner(carName);
    // Assert
    const expectedResult = '최종 우승자 : pobi, jun';
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedResult));
  });
});
