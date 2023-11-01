import { MissionUtils } from '@woowacourse/mission-utils';
import {
  calcurateScore,
  createScoreBoard,
  printScore,
} from '../../modules/scoreBoard.js';

const mockRandoms = (numbers) => {
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

describe('스코어보드 테스트.', () => {
  test('스코어 보드 생성 테스트', () => {
    const userInput = ['고세종', '세종고'];
    const expectedResult = [
      { name: '고세종', score: '' },
      { name: '세종고', score: '' },
    ];
    const testResult = createScoreBoard(userInput);

    expect(testResult).toEqual(expectedResult);
  });

  test('스코어 계산 테스트', () => {
    const randoms = [5, 6];
    const scoreBoard = [
      { name: '고세종', score: '' },
      { name: '김민협', score: '' },
    ];
    const expectedResult = [
      { name: '고세종', score: '-' },
      { name: '김민협', score: '-' },
    ];
    mockRandoms(randoms);
    const testResult = calcurateScore(scoreBoard);

    expect(testResult).toEqual(expectedResult);
  });

  test('스코어 프린트 테스트', () => {
    const logSpy = getLogSpy();
    const scoreBoard = [
      { name: '고세종', score: '--' },
      { name: '김민협', score: '-' },
      { name: '세종고', score: '----' },
    ];
    const outputs = ['고세종 : --', '김민협 : -', '세종고 : ----'];

    printScore(scoreBoard);

    outputs.forEach((output) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
    );
  });
});
