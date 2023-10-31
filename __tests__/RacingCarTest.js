import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('RacingGame', () => {
  let app;

  beforeEach(async () => {
    app = new App();
  });

  test('car2가 우승하는 경우', async () => {
    const inputs = ['car1, car2, car3', '1'];
    const randomNumbers = [2, 4, 1];
    const outputs = ['최종 우승자: car2'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    mockRandoms(randomNumbers);

    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자가 2명 이상인 경우', async () => {
    const inputs = ['car1, car2, car3', '2'];
    const randomNumbers = [6, 4, 1, 4, 5, 1];
    const outputs = ['최종 우승자: car1, car2'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    mockRandoms(randomNumbers);

    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
