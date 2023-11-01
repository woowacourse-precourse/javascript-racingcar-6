import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from '../src/constants/Constant.js';
import RacingCarGame from '../src/RacingCarGame.js';

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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('RacingCarGame 클래스 테스트', () => {
  test.each([
    {
      inputs: ['pobi', '1'],
      randoms: [9],
      outputs: [MESSAGE.executeResult, 'pobi : -', `${MESSAGE.finalWinner} pobi`],
    },
    {
      inputs: ['pobi,yuna,lisa', '1'],
      randoms: [2, 3, 4],
      outputs: [MESSAGE.executeResult, 'pobi : \nyuna : \nlisa : -', `${MESSAGE.finalWinner} lisa`],
    },
    {
      inputs: ['pobi,yuna,lisa', '3'],
      randoms: [5, 0, 0, 0, 4, 4, 0, 5, 5],
      outputs: [
        MESSAGE.executeResult,
        'pobi : -\nyuna : \nlisa : ',
        'pobi : -\nyuna : -\nlisa : -',
        'pobi : -\nyuna : --\nlisa : --',
        `${MESSAGE.finalWinner} yuna, lisa`,
      ],
    },
  ])('게임이 정상 작동 하는지 테스트', async ({ inputs, randoms, outputs }) => {
    // given
    mockQuestions(inputs);
    mockRandoms(randoms);
    const logSpy = getLogSpy();

    // when
    const racingCarGame = new RacingCarGame();
    await racingCarGame.startGame();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([
    { inputs: [''], output: ERROR.hasEmpty },
    { inputs: ['  '], output: ERROR.hasEmpty },
    { inputs: [',pobi,'], output: ERROR.hasEmpty },
    { inputs: ['kimyuna'], output: ERROR.longerThanMaxLen },
    { inputs: ['pobi,yuna,pobi'], output: ERROR.hasDuplicate },
  ])('자동차 이름 입력값에 대한 예외처리 테스트', async ({ inputs, output }) => {
    // given
    mockQuestions(inputs);

    // when
    const racingCarGame = new RacingCarGame();

    // then
    await expect(racingCarGame.startGame()).rejects.toThrow(output);
  });

  test.each([
    { input: ['pobi', 'yuna'], output: ERROR.isNotNumber },
    { input: ['pobi', NaN], output: ERROR.isNotNumber },
    { input: ['pobi', ''], output: ERROR.isNotNumber },
    { input: ['pobi', '3.2'], output: ERROR.isNotInteger },
    { input: ['pobi', '-1'], output: ERROR.isNegative },
    { input: ['pobi', '0'], output: ERROR.notMoving },
  ])('시도 횟수 입력값에 대한 예외처리 테스트', async ({ input, output }) => {
    // given
    mockQuestions(input);

    // when
    const racingCarGame = new RacingCarGame();

    // then
    await expect(racingCarGame.startGame()).rejects.toThrow(output);
  });
});
