import { MissionUtils } from '@woowacourse/mission-utils';
import race from '../src/race';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    number.reduce((acc, randomNumbers) => {
      return acc.mockReturnValueOnce(randomNumbers);
    }, MissionUtils.Random.pickNumberInRange);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차들의 경주 테스트', () => {
  test('자동차들의 경주', () => {
    const carNames = ['pobi', 'woni', 'jun'];
    const ATTEMPT_NUMBER = 5;
    const randomNumbers = [
      [1, 5, 4],
      [1, 5, 3],
      [4, 4, 4],
      [3, 3, 4],
      [7, 9, 8],
    ]; // 2 4 4
    const logSpy = getLogSpy();
    const outputs = [
      ['pobi : ', 'woni : -', 'jun : -'],
      ['pobi : ', 'woni : --', 'jun : -'],
      ['pobi : -', 'woni : ---', 'jun : --'],
      ['pobi : -', 'woni : ---', 'jun : ---'],
      ['pobi : --', 'woni : ----', 'jun : ----'],
    ];
    const WINNERS = '최종 우승자 : woni, jun';
    mockRandoms(randomNumbers);
    race(carNames, ATTEMPT_NUMBER);

    outputs.forEach((output) => {
      output.forEach((print) => {
        expect(logSpy).toHaveBeenCalledWith(print);
      });
    });
    expect(logSpy).toHaveBeenCalledWith(WINNERS);
  });
});
