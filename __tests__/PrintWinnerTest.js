import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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

describe('자동차 경주 게임', () => {
  test('test1: 가장 많이 이동한 자동차를 우승자로 출력', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['min,gyu', '2'];
    const outputs = ['최종 우승자 : min'];
    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('test2: 가장 많이 이동한 자동차를 우승자로 출력', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['min,gyu,woo,teco', '3'];
    const outputs = ['최종 우승자 : woo,teco'];
    const randoms = [
      STOP,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
