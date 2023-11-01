import { INFO_MESSAGE } from '../src/Util/message';
import { MissionUtils } from '@woowacourse/mission-utils';
import playGame from '../src/playGame';

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

describe('자동자 경주 게임', () => {
  test('[자동차 경주 게임] 정상 진행', async () => {
    // Arrange
    const logSpy = getLogSpy();
    const playNumber = 2;
    const carName = new Map([
      ['pobi', ''],
      ['jun', ''],
    ]);
    const random = [4, 3, 5, 6];
    mockRandoms([...random]);
    const outputs = ['pobi : -', 'jun : ', 'pobi : --', 'jun : -'];
    // Act
    playGame(playNumber, carName);
    // Assert
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INFO_MESSAGE.result));
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
