import race from '../src/Race';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Race.js 테스트', () => {
  test('작동 테스트', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputArray = ['sk', 'lg', 'kia'];
    const inputTryCount = 1;
    const outputArray = ['-', '-', ''];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP];
    const outputConsoles = ['\n실행결과', 'sk : -', 'lg : -', 'kia :'];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    const result = await race(inputArray, inputTryCount);

    outputConsoles.forEach((outputConsole) => {
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(outputConsole)
      );
    });
    expect(result).toEqual(outputArray);
  });
});
