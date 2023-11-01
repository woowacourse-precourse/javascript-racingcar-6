import App from '../src/App';
import { MissionUtils } from '@woowacourse/mission-utils';

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

describe('이동 횟수 테스트', () => {
  test('숫자가 맞는지 확인', async () => {
    const inputs = ['min,gi', 'a'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('양수인지 확인', async () => {
    const inputs = ['mingi,gi', '0'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
