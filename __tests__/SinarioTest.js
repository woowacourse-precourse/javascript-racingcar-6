import App from '../src/App.js';
import { Console, Random } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('우승자의 결과가 제대로 출력되는지 확인', () => {
  test('pobi가 5회 전진, doki가 5회 전진, woni가 3회 전진했을때 우승자 출력 확인', async () => {
    const MOVABLE = 4;
    const STOP = 3;
    const inputs = ['pobi,woni,doki', '2'];
    const outputs = ['최종 우승자 : pobi, doki'];
    const randoms = [MOVABLE, STOP, MOVABLE, MOVABLE, STOP, MOVABLE];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
