import { MissionUtils } from '@woowacourse/mission-utils';
import { playRounds } from '../src/functions/gameProgress';

const mockRandoms = numbers => {
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

describe('자동차 1회 경주 테스트', () => {
  test('랜덤 값이 3이하 시 정지', () => {
    // given
    const racingResult = [
      { carName: 'pobi', distance: '' },
      { carName: 'woni', distance: '' },
      { carName: 'jun', distance: '' },
    ];
    const playCount = 1;
    const outputs = ['pobi : ', 'woni : ', 'jun : '];
    const randoms = [0, 1, 3];
    const logSpy = getLogSpy();

    mockRandoms(randoms);

    // when
    expect(playRounds(racingResult, playCount));

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('랜덤 값이 4이상 시 전진', () => {
    // given
    const racingResult = [
      { carName: 'pobi', distance: '' },
      { carName: 'woni', distance: '' },
    ];
    const playCount = 1;
    const outputs = ['pobi : -', 'woni : -'];
    const randoms = [4, 9];
    const logSpy = getLogSpy();

    mockRandoms(randoms);

    // when
    expect(playRounds(racingResult, playCount));

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
