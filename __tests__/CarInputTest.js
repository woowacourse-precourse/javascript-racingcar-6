import App from '../src/App.js';
import { carMessages } from '../src/Messages.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 경주 게임 자동차 입력 테스트', () => {
  test('5글자 이상 입력', async () => {
    const input = ['pobi,javaji'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(carMessages.ERROR_FIVE_CHARACTERS);
  });

  test('중복 이름 입력', async () => {
    const input = ['pobi,pobi'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(carMessages.ERROR_DUPLICATE);
  });

  test('입력 없음', async () => {
    const input = [''];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(carMessages.ERROR_BLANK_NAME);
  });
});
