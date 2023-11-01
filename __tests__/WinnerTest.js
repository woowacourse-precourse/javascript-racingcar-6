import { MissionUtils } from '@woowacourse/mission-utils';
import { findWinner } from '../src/models/RunRace';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 우승자 선정', () => {
  test('게임 진행이후 주어진 객체에서 value 값이 가장 길이가 긴, 가장 많이 전진한 자동차를 우승자로 선정, 출력한다.', () => {
    const input = {
      car1: '---',
      car2: '-',
      car3: '',
    };
    const result = '최종 우승자 : car1';
    const logSpy = getLogSpy();
    findWinner(input);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
  });

  test('공동우승 시 최종 우승자 두명이상 출력한다.', () => {
    const input = {
        car1: '---',
        car2: '-',
        car3: '---',
    };

    const result = '최종 우승자 : car1, car3';
    const logSpy = getLogSpy();
    findWinner(input);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
  });
});
