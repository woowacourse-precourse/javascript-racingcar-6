import { Console } from '@woowacourse/mission-utils';
import Output from '../src/Output';
import { MESSAGE } from '../src/constant.js';

describe('Output 클래스 테스트', () => {
  test('prinProgress 함수 테스트', () => {
    const logSpy = jest.spyOn(Console, 'print');
    const NAME = 'taeyoon';
    const PROGRESS = '---';

    Output.printProgress(NAME, PROGRESS);

    expect(logSpy).toHaveBeenCalledWith(MESSAGE.progressResult(NAME, PROGRESS));
  });

  test('printEmptyLine 함수 테스트', () => {
    const logSpy = jest.spyOn(Console, 'print');

    Output.printEmptyLine();

    expect(logSpy).toHaveBeenCalledWith(MESSAGE.progressDivider);
  });

  test('printWinner 함수 테스트', () => {
    const logSpy = jest.spyOn(Console, 'print');
    const WINNER = 'a, b, c';

    Output.printWinner(WINNER);

    expect(logSpy).toHaveBeenCalledWith(MESSAGE.winnerResult(WINNER));
  });
});
