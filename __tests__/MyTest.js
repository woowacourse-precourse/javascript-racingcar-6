import { Console } from '@woowacourse/mission-utils';
import App from '../src/App';
import Car from '../src/Car';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('입력 테스트', () => {
  test.each([[['harenkei,jeong']], [['haren,harenkei']]])(
    '이름 예외 처리',
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.getInputCars()).rejects.toThrow('[ERROR]');
    },
  );

  test.each([[['f']], [['d']]])('반복 횟수 유효성 검사', async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.getInputGameCount()).rejects.toThrow('[ERROR]');
  });
});
