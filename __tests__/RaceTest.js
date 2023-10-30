import race from '../src/Race';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Race.js 테스트', () => {
  test('작동 테스트', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputArray = ['sk', 'lg', 'kia'];
    const inputTryCount = 1;
    const outputArray = ['-', '-', ''];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP];
    const outputConsole = 'sk : -';
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    mockRandoms([...randoms]);

    const result = await race(inputArray, inputTryCount);

    expect(spy).toHaveBeenCalledWith(outputConsole);
    expect(result).toEqual(outputArray);
  });
});
