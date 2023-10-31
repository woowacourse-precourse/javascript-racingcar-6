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

describe('자동차 경주 게임', () => {
  test('전진-정지', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -'];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    
    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();


    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('이름이 적히지 않거나 공백이면 예외 처리', async () => {
    const input = ['mike,paul,,tom'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력값에 이름을 적지 않았거나 공백을 적었습니다.');
  });

  test('이름에 숫자가 포함되어 있으면 예외 처리', async () => {
    const input = ['mike,paul,234'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력값에 숫자가 포함되어 있습니다.');
  });
  test('입력값에 쉼표와 알파벳을 제외한 문자가 포함되어 있으면 예외 처리', async () => {
    const input = ['mike#,paul'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력값에 쉼표와 알파벳을 제외한 문자가 들어있습니다.');
  });

  test.each([
    [['pobi,javaji']],
    [['pobi,eastjun']]
  ])('이름의 길이가 5자가 넘어가면 예외 처리', async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력한 이름의 길이가 5자를 넘어갑니다.');
  });

  test('이름의 갯수가 1개 이하이면 예외 처리', async () => {

    const input = ['mike'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 두 개 이상의 이름이 입력되지 않았습니다.');
  });

  test('라운드 숫자를 적지 않았거나 공백이면 예외 처리', async () => {

    const input = ['mike,paul', ''];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력값에 숫자를 적지 않았거나 공백을 적었습니다.');
  });

  test('라운드 입력값이 숫자가 아니면 예외 처리', async () => {

    const input = ['mike,paul', 'abc'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력값에 숫자를 제외한 문자가 포함되어 있습니다.');
  });

  test('라운드 숫자가 정수가 아니면 예외 처리', async () => {
    const input = ['mike,paul', '1.5'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력값이 정수가 아닙니다.');
  });

  test('라운드 숫자가 0이거나 음수면 예외 처리', async () => {

    const input = ['mike,paul', '-5'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력값이 0이거나 음수입니다.');
  });
});
