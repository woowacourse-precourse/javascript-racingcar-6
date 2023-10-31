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

describe('라운드 결과 출력 테스트', () => {
  test('전진-정지 1번 출력 테스트', async () => {
    // given
    const MOVE_FORWARD = 4;
    const STOP = 1;
    const inputs = ['rose,lucy', '1'];
    const outputs = ['rose : -', 'lucy : '];
    const randoms = [MOVE_FORWARD, STOP];
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

  test('전진-정지 3번 출력 테스트', async () => {
    // given
    const [FORWARD1, FORWARD2, FORWARD3] = [4, 5, 8];
    const [STOP1, STOP2, STOP3] = [3, 2, 1];
    const inputs = ['rose,lucy', '3'];
    const outputs = ['rose : -', 'lucy : -', 'rose : -', 'lucy : --', 'rose : --', 'lucy : --'];
    const randoms = [FORWARD1, FORWARD1, STOP2, FORWARD2, FORWARD3, STOP3];
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
