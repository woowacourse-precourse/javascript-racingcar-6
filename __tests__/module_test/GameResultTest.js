import { findWhoIsWinner, printGameResult } from '../../modules/gameResult.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const multiWinnerScoreBoard = [
  { name: 'sejong', score: '---' },
  { name: 'jisoo', score: '---' },
  { name: 'minhyeop', score: '-' },
];

const soloWinnerScoreBoard = [
  { name: 'sejong', score: '-' },
  { name: 'jisoo', score: '---' },
  { name: 'minhyeop', score: '--' },
];

describe('우승자 찾기', () => {
  test('공동 우승자 찾기', () => {
    const expectedResult = [
      { name: 'sejong', score: '---' },
      { name: 'jisoo', score: '---' },
    ];
    const testResult = findWhoIsWinner(multiWinnerScoreBoard);

    expect(testResult).toEqual(expectedResult);
  });

  test('단독 우승자 찾기', () => {
    const expectedResult = [{ name: 'jisoo', score: '---' }];

    const testResult = findWhoIsWinner(soloWinnerScoreBoard);

    expect(testResult).toEqual(expectedResult);
  });
});

describe('최종 우승자 출력', () => {
  const logSpy = getLogSpy();

  test('단독 우승자 출력', () => {
    const expectedResult = 'jisoo';

    printGameResult(soloWinnerScoreBoard);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedResult)
    );
  });

  test('공동 우승자 출력', () => {
    const expectedResult = 'sejong, jisoo';
    printGameResult(multiWinnerScoreBoard);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedResult)
    );
  });
});
