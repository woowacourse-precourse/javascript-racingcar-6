import App from '../src/App.js';
import { tryMessage } from '../src/Messages.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 경주 게임 시도 횟수 입력 테스트', () => {
  test('문자열 입력', async () => {
    const input = ['pobi,java', 'string'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(tryMessage.ERROR_INPUT_TRY);
  });

  test('공백 입력', async () => {
    const input = ['pobi,java', ' '];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(tryMessage.ERROR_INPUT_TRY);
  });

  test('0 입력', async () => {
    const input = ['pobi,java', '0'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(tryMessage.ERROR_INPUT_TRY);
  });

  test('음수 입력', async () => {
    const input = ['pobi,java', '-1'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(tryMessage.ERROR_INPUT_TRY);
  });

  test('소수 입력', async () => {
    const input = ['pobi,java', '1.5'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(tryMessage.ERROR_INPUT_TRY);
  });
});
