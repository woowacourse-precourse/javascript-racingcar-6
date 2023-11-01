import printLog from '../src/View/printLog';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('자동자 경주 기록 출력', () => {
  test('[자동차 경주 기록] 정상 출력', () => {
    // Arrange
    const logSpy = getLogSpy();
    const carName = new Map([
      ['pobi', ''],
      ['jun', ''],
    ]);
    const random = [4, 3];
    mockRandoms([...random]);
    const outputs = ['pobi : -', 'jun : '];
    // Act
    printLog(carName);
    // Assert
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
