import App from '../src/App.js';
import {MissionUtils} from '@woowacourse/mission-utils';
import CONSTANTS from '../utils/Constants.js';

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

const inputs = [
  ['a,b', '2'],
  ['a,b', '2'],
];
const randoms = [
  [
    CONSTANTS.progressValue - 1,
    CONSTANTS.progressValue,
    CONSTANTS.progressValue,
    CONSTANTS.progressValue - 1,
  ],
  [
    CONSTANTS.progressValue - 1,
    CONSTANTS.progressValue,
    CONSTANTS.progressValue,
    CONSTANTS.progressValue,
  ],
];
const outputs = [
  ['a : ', 'b : -', 'a : -', 'b : -', '최종 우승자 : a, b'],
  ['a : ', 'b : -', 'a : -', 'b : --', '최종 우승자 : b'],
];

describe('자동차 경주 게임', () => {
  test.each([
    [inputs[0], randoms[0], outputs[0]],
    [inputs[1], randoms[1], outputs[1]],
  ])('공동 우승과 단독 우승 테스트', async (inputs, randoms, outputs) => {
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
