import OutputView from '../src/View/OutputView';
import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('OutputView 단위 테스트', () => {
  test('print 메서드로 메시지를 출력', () => {
    const message = 'abcdefg';
    const logSpy = getLogSpy();

    OutputView.print(message);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });

  test('printExecutionMessage 메서드로 실행 결과문을 출력', () => {
    const message = '\n실행 결과';
    const logSpy = getLogSpy();

    OutputView.printExecutionMessage();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });

  test('printEndOfRound 메서드로 라운드를 구분하기 위해 빈 문자열 출력', () => {
    const message = '';
    const logSpy = getLogSpy();

    OutputView.printEndOfRound();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });

  test('printWinners 메서드로 최종 우승자를 출력', () => {
    const winners = ['alice', 'bob']
    const message = '최종 우승자 : alice, bob';
    const logSpy = getLogSpy();

    OutputView.printWinners(winners);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });
});