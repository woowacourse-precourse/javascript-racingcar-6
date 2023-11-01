import Winner from '../src/RaceGame/Winner.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 우승자 출력 검증 테스트 ', () => {
  test('단독 우승자일 경우 안내 문구 출력', () => {
    const forwardStatus = new Map([
      ['pobi', '----'],
      ['woni', '--'],
      ['jun', '---'],
    ]);

    const winner = new Winner(forwardStatus);
    const logSpy = getLogSpy();

    winner.getRaceWinner();

    expect(logSpy).toHaveBeenCalledWith('\n최종 우승자 : pobi');
  });

  test('공동 우승자가 존재할 경우 쉼표(,)를 이용하여 구분 후 안내 문구 출력', () => {
    const forwardStatus = new Map([
      ['pobi', '----'],
      ['woni', '--'],
      ['jun', '----'],
    ]);

    const winner = new Winner(forwardStatus);
    const logSpy = getLogSpy();

    winner.getRaceWinner();

    expect(logSpy).toHaveBeenCalledWith('\n최종 우승자 : pobi, jun');
  });
});
