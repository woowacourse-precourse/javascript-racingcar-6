import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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

describe('어플리케이션 중간 출력 테스트', () => {
  test('게임 입력 값을 통해서 전진이 정상적으로 작동하는지 확인', async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ['pobi', '1'];
    const output = 'pobi : -';
    const randoms = [MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
  test('게임 입력 값을 통해서 정지가 정상적으로 작동하는지 확인', async () => {
    // given
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const output = 'pobi : ';
    const randoms = [STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
