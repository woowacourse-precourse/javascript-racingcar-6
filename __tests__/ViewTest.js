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
  test('전진 결과 출력 - printAdvanceResult(models)', () => {
    const models = [
      { name: 'pobi', moveCnt: 1 },
      { name: 'java', moveCnt: 0 },
    ];
    const outputs = ['pobi : -', 'java : '];
    const logSpy = getLogSpy();

    const view = new OutputView();
    view.printAdvanceResult(models);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('결과 포맷 - formatResult(model)', () => {
    const model = { name: 'pobi', moveCnt: 3 };

    const view = new OutputView();

    expect(view.formatResult(model)).toBe('pobi : ---');
  });

  test('전진 문구 - generateAdvanceString(moveCnt)', () => {
    const MOVE_CNT = 3;

    const view = new OutputView();

    expect(view.generateAdvanceString(MOVE_CNT)).toBe('---');
  });
});

describe('InputView 테스트', () => {
  test('자동차 이름 입력 받기 - 성공', async () => {
    const inputs = ['pobi,woni'];
    const outputs = ['pobi', 'woni'];

    mockQuestions(inputs);

    const view = new InputView();
    expect(await view.getCarName()).toEqual(outputs);
  });

  test.each([[['pobi, woni']], [['pobi,wo ni']], [['pobi,javajigi']]])(
    '자동차 이름 입력 받기 - 실패',
    async (inputs) => {
      mockQuestions(inputs);

      const view = new InputView();
      await expect(view.getCarName()).rejects.toThrow('[ERROR]');
    },
  );

  test('시도 횟수 입력 받기 - 성공', async () => {
    const input = '2';
    const output = 2;

    mockQuestion(input);

    const view = new InputView();
    expect(await view.getAttemptNum()).toBe(output);
  });

  test.each(['a2', '2a', '13.22', '', '-3'])(
    '시도 횟수 입력 받기 - 실패',
    async (input) => {
      mockQuestion(input);

      const view = new InputView();
      await expect(view.getAttemptNum()).rejects.toThrow('[ERROR]');
    },
  );
});
