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

describe('자동차 이름 테스트', () => {
  test('이름 공백 테스트', async () => {
    const inputs = [',,,', '3'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('중복된 이름 테스트', async () => {
    const inputs = ['mingi,mingi', '3'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('입력이 없는 경우', async () => {
    const inputs = ['', '5'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
