import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

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
    mockQuestions(['car1,car2', '3']);
    const logSpy = getLogSpy();
    await app.play();

    expect(logSpy).toHaveBeenCalled();
  });
});
