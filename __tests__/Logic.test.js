import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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
  test('게임 테스트', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;

    const inputs = ['woo, te, co'];
    const inputCount = '3';
    const randoms = [STOP, STOP, STOP,
                     STOP, MOVING_FORWARD, STOP,
                     MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD,];

    const result = ['\n실행 결과',
                    'woo : \nte : \nco : \n',
                    'woo : \nte : -\nco : \n',
                    'woo : -\nte : --\nco : -\n',
                    '최종 우승자 : te\n'];
    const logSpy = getLogSpy();

    mockQuestions([...inputs, inputCount]);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    result.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });

  test('게임 테스트2', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;

    const inputs = ['woo, te'];
    const inputCount = '2';
    const randoms = [MOVING_FORWARD, STOP,
                     STOP, MOVING_FORWARD,];

    const result = ['\n실행 결과',
                    'woo : -\nte : \n',
                    'woo : -\nte : -\n',
                    '최종 우승자 : woo, te\n'];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);
    mockQuestions([...inputs, inputCount]);

    const app = new App();
    await app.play();

    result.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(output);
      console.log(logSpy.mock.calls)
    });
  });
});
