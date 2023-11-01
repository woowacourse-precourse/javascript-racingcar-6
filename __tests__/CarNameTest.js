import App from '../src/App.js';
import  { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

test.each([
  [['']],
  [['pobi,123']],
  [['pobi,abcdef']],
  [['pobi,   ']],
  [['pobi,pobi']],
])('자동차 이름 예외 테스트', async (inputs) => {
  mockQuestions(inputs);
  const app = new App();
  await expect(app.play()).rejects.toThrow('[ERROR]');
})