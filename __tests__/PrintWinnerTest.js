import { MissionUtils } from '@woowacourse/mission-utils';
import { checkDistanceResult, printWinner } from '../src/functions/gameFinish';
import { MESSAGE } from '../src/constants/message';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('우승자 찾기 및 출력 테스트', () => {
  test('단독 우승자', () => {
    // given
    const carDistanceList = [
      { carName: 'pobi', distance: '-' },
      { carName: 'woni', distance: '---' },
      { carName: 'jun', distance: '---' },
      { carName: 'soo', distance: '--' },
      { carName: 'minha', distance: '----' },
    ];
    const output = `${MESSAGE.printWinner}minha`;
    const logSpy = getLogSpy();

    // when
    printWinner(checkDistanceResult(carDistanceList));

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(output));
  });

  test('공동 우승자', async () => {
    // given
    const carDistanceList = [
      { carName: 'pobi', distance: '-' },
      { carName: 'woni', distance: '---' },
      { carName: 'jun', distance: '----' },
      { carName: 'soo', distance: '--' },
      { carName: 'minha', distance: '----' },
    ];
    const output = `${MESSAGE.printWinner}jun, minha`;
    const logSpy = getLogSpy();

    // when
    printWinner(checkDistanceResult(carDistanceList));

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(output));
  });
});
