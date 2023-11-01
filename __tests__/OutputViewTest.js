import { Console } from '@woowacourse/mission-utils';
import OutputView from '../src/views/outputView';
import { GAME_MESSAGES, SYMBOLS } from '../src/utils/constants';

Console.print = jest.fn();

describe('OutputView 테스트', () => {
  let outputView;

  beforeEach(() => {
    outputView = new OutputView();
    Console.print.mockClear();
  });

  describe('결과 헤더 출력 테스트', () => {
    it('게임의 결과 헤더를 출력한다.', () => {
      outputView.printResultHeader();
      expect(Console.print).toHaveBeenCalledWith(GAME_MESSAGES.resultHeader);
    });
  });

  describe('라운드 결과 출력 테스트', () => {
    it('특정 라운드의 결과를 출력한다.', () => {
      const roundResult = 'car1 : --\ncar2 : -';
      outputView.printRoundResult(roundResult);
      expect(Console.print).toHaveBeenCalledWith(roundResult + '\n');
    });
  });

  describe('우승자 출력 테스트', () => {
    it('우승자 목록을 출력한다.', () => {
      const winners = ['car1', 'car2'];
      outputView.printWinners(winners);
      const expectedOutput =
        GAME_MESSAGES.winnerPrefix + winners.join(SYMBOLS.winnerNameSeparator);
      expect(Console.print).toHaveBeenCalledWith(expectedOutput);
    });
  });
});
