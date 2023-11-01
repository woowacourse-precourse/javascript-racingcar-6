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

describe('자동차 경주 게임 입력값 유효성 검사', () => {
  test('입력받은 자동차 갯수가 1개인 경우', async () => {
    // given
    const inputs = ['car1', '1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력값이 5자를 초과하는 경우', async () => {
    // given
    const inputs = ['car1, incorrect ,car3', '1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력값이 중복되는 경우', async () => {
    // given
    const inputs = ['car1,car1,car3', '1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력값이 없는 경우', async () => {
    // given
    const inputs = [' , car1', '1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('중간에 공백이 포함된 자동차 이름 입력값이 있는 경우', async () => {
    // given
    const inputs = ['car1, a car, car3', '1'];
    const logSpy = getLogSpy();
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('a car'));
  });

  test('시도 횟수가 숫자가 아닌 경우', async () => {
    // given
    const inputs = ['car1,car2,car3', 'invalidType'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 0인 경우', async () => {
    // given
    const inputs = ['car1,car2,car3', '0'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 음수인 경우', async () => {
    // given
    const inputs = ['car1,car2,car3', '-1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 정수가 아닌 경우', async () => {
    // given
    const inputs = ['car1,car2,car3', '2.45'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
