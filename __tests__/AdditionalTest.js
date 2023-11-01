import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('사용자 입력 예외 테스트', () => {
  test.each([
    [['']],
    [[' ']],
    [[',']],
    [[',,,,']],
    [['pobi,,,']],
    [['pobi,,,hyun']],
    [[',,,pobi']],
  ])('사용자가 비정상적인 이름을 입력한 경우', async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test.each([[['pobi,hyun', '멍']], [['pobi,hyun', '']], [['pobi,hyun', ' ']]])(
    '사용자가 비정상적인 라운드 값을 입력한 경우',
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow('[ERROR]');
    }
  );
});
