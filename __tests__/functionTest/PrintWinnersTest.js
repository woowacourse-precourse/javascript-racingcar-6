import printWinners from '../../src/functions/startRacing/printWinners';
import { getLogSpy } from '../../src/utils/testUtils';

describe('printWinners 함수 테스트', () => {
  test('출력 형식 일치', () => {
    // given
    const mockWinners = ['car1', 'car5'];
    const logSpy = getLogSpy();
    const regx = /^최종 우승자 :/;

    // when
    printWinners(mockWinners);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(regx));
  });
  test('우승자 출력', () => {
    // given
    const mockWinners = ['car1', 'car5'];
    const logSpy = getLogSpy();
    const winners = ['car1', 'car5'];

    // when
    printWinners(mockWinners);

    // then
    winners.forEach((winner) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(winner));
    });
  });
});
