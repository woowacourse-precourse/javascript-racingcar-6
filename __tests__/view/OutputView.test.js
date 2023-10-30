import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../../src/view/OutputView';
import { MESSAGES } from '../../src/constants/Messages';

describe('OutputView 클래스', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
  });

  test('printRaceHeader 메서드는 RACE_HEADER를 출력해야 한다', () => {
    OutputView.printRaceHeader();
    expect(logSpy).toHaveBeenCalledWith(MESSAGES.RACE_HEADER);
  });

  test('printRoundResult 메서드는 각 라운드 결과를 출력해야 한다', () => {
    const roundResults = [
      { name: 'car1', representation: '--' },
      { name: 'car2', representation: '-' }
    ];
    OutputView.printRoundResult(roundResults);
    expect(logSpy).toHaveBeenCalledWith('car1 : --');
    expect(logSpy).toHaveBeenCalledWith('car2 : -');
    expect(logSpy).toHaveBeenCalledWith(' ');
  });

  test('printWinners 메서드는 우승자를 출력해야 한다', () => {
    const winners = 'car1,car2';
    OutputView.printWinners(winners);
    expect(logSpy).toHaveBeenCalledWith(MESSAGES.FINAL_WINNER + winners);
  });
});
