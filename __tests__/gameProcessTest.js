import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

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

describe('findWinner', () => {
  test('우승자 탐색', () => {
    // given
    const app = new App();
    app.players = [
      { name: 'jeong', moveAttempts: 3 },
      { name: 'yeung', moveAttempts: 5 },
      { name: 'jin', moveAttempts: 7 },
      { name: 'max', moveAttempts: 7 },
    ];

    // when
    const WINNER = app.findWinner();

    // then
    expect(WINNER).toBe('최종 우승자 : jin, max');
  });
});
