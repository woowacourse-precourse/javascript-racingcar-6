import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

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

describe('추가적인 테스트', () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  test('조건에 맞지 않는 자동차 이름을 입력했을 때 예외를 던진다', async () => {
    mockQuestions(['asdczxc']);
    await expect(app.inputCarNames()).rejects.toThrow();
  });

  test('잘못된 시도 횟수를 입력했을 때 예외를 던진다', async () => {
    mockQuestions(['-1']);
    await expect(app.inputCountOfAttemp()).rejects.toThrow();
  });

  test('정상적인 게임 실행', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['car1,car2,car3', '5'];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    await app.play();

    const expectedOutputs = ['car1 : -', 'car2 : ', 'car3 : --'];

    expectedOutputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
