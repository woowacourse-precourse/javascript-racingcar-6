import { MissionUtils } from '@woowacourse/mission-utils';
import { MOVING_FORWARD, STOP } from '../src/constants/testValue.js';
import App from '../src/App.js';

export const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

export const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};



describe('자동차 경주 게임', () => {
  test('2대의 자동차와 1회 경주', async () => {
    // given
    const inputs = ['pobi,woni', '1'];
    const outputs = ['최종 우승자 : pobi'];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });


  test('3대의 자동차와 3회 경주', async () => {
    // given
    const inputs = ['jun, yeon, hyo', '3'];
    const outputs = ['최종 우승자 : hyo'];
    const randoms = [STOP, MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD, STOP, STOP, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('중복 우승자 테스트 2명', async () => {
    // given
    const inputs = ['jun, yeon, hyo, nari', '2'];
    const outputs = ['최종 우승자 : hyo, nari'];
    const randoms = [STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, STOP, STOP, MOVING_FORWARD, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });


  test('중복 우승자 테스트 3명', async () => {
    // given
    const inputs = ['jun, yeon, hyo, nari', '2'];
    const outputs = ['최종 우승자 : yeon, hyo, nari'];
    const randoms = [STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('모든 차량의 움직임이 0인 경우', async () => {
    // given
    const inputs = ['jun, yeon, hyo, nari', '2'];
    const outputs = ['최종 우승자 : jun, yeon, hyo, nari'];
    const randoms = [STOP, STOP, STOP, STOP, STOP, STOP, STOP, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

