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
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('class App test', () => {
  test('', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['C1,C2,C3', '4'];
    const randoms = [
      Array(3).fill(STOP),
      Array(3).fill(MOVING_FORWARD),
      [STOP, MOVING_FORWARD, STOP],
      [STOP, STOP, MOVING_FORWARD],
    ].flat();
    const outputs = [
      ['C1 : ', 'C2 : ', 'C3 : '],
      ['C1 : -', 'C2 : -', 'C3 : -'],
      ['C1 : -', 'C2 : --', 'C3 : -'],
      ['C1 : -', 'C2 : --', 'C3 : --'],
      ['최종 우승자 : C2, C3'],
    ].flat();

    mockQuestions(inputs);
    mockRandoms([...randoms]);
    MissionUtils.Console.print = jest.fn();

    const app = new App();
    await app.play();
    outputs.forEach((output) => {
      expect(MissionUtils.Console.print).toHaveBeenCalledWith(output);
    });
  });
});
