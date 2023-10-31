import App from '../src/App.js';
import { mockQuestions } from './module/modules.js';

describe('자동차 경주 게임', () => {
  test('정상 입력 테스트', async () => {
    const input = ['pobi,woni', '1'];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).resolves.not.toThrow();
  });
});
