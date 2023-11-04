import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../src/views/OutputView';
import InputView from '../src/views/InputView';
import { MESSAGES } from '../src/constants/messages';

const mockQuestion = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('OutputView 테스트', () => {
  // 전진 결과 출력 테스트
  test('전진 결과 출력 - printAdvanceResult(models)', () => {
    const models = [
      { name: 'pobi', position: 1 },
      { name: 'java', position: 0 },
    ];
    const outputs = ['pobi : -', 'java : '];
    const logSpy = getLogSpy();

    const view = new OutputView();
    view.printAdvanceResult(models);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('결과 포맷 - formatAdvanceResult(model)', () => {
    const model = { name: 'pobi', position: 3 };
    const output = 'pobi : ---';

    const view = new OutputView();

    expect(view.formatAdvanceResult(model)).toBe(output);
  });

  // 우승자 출력 테스트
  test('우승자 출력 - printWinner(winners)', () => {
    const winners = ['pobi', 'woni'];
    const output = '최종 우승자 : pobi, woni';
    const logSpy = getLogSpy();

    const view = new OutputView();
    view.printWinner(winners);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

describe('InputView 테스트', () => {
  test('자동차 이름 입력 받기 - 성공', async () => {
    const inputs = ['pobi,woni'];
    const outputs = ['pobi', 'woni'];

    mockQuestions(inputs);

    const view = new InputView();
    expect(await view.getCarNames()).toEqual(outputs);
  });

  test.each([[['pobi, woni']], [['pobi,wo ni']], [['pobi,javajigi']]])(
    '자동차 이름 입력 받기 - 실패',
    async (inputs) => {
      mockQuestions(inputs);

      const view = new InputView();
      await expect(view.getCarNames()).rejects.toThrow('[ERROR]');
    },
  );

  test.each(['2'])('시도 횟수 입력 받기 - 성공', async (input) => {
    mockQuestion(input);

    const view = new InputView();
    expect(await view.getAttemptNum()).toBe(Number(input));
  });

  test.each(['a2', '2a', '13.22', '', '-3', '0', '12 23'])(
    '시도 횟수 입력 받기 - 실패',
    async (input) => {
      mockQuestion(input);

      const view = new InputView();
      await expect(view.getAttemptNum()).rejects.toThrow('[ERROR]');
    },
  );
});
