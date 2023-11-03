import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../src/views/View.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('view 테스트', () => {
  test('올바르지 않은 입력 테스트', async () => {
    const logSpy = getLogSpy();
    const answers = ['pobyyyy, json', '@#%, 125'];
    mockQuestions(answers);
    answers.forEach(async () => {
      expect(() => View.askNameAnswer()).rejects.toThrow('[ERROR]');
    });
  });
  test('공백 제거 입력 테스트', async () => {
    const logSpy = getLogSpy();
    const answers = ['poby, js on', 'p o b y, j s o n'];
    const output = ['poby', 'json'];
    mockQuestions(answers);
    answers.forEach(async () => {
      const value = await View.askNameAnswer();
      expect(value).toEqual(output);
    });
  });
  test('라운드 출력 테스트', () => {
    const logSpy = getLogSpy();

    View.roundPrint('poby', 3);
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching('poby : ---'));
  });

  test('우승자 출력 테스트', () => {
    const logSpy = getLogSpy();
    const winners = [['poby'], ['poby', 'json']];
    const outputs = ['poby', 'poby, json'];
    winners.forEach((winner) => View.winnerPrint(winner));
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(output));
    });
  });
});
