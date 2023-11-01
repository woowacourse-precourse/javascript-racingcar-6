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

describe('시도횟수당 결과 출력 테스트', () => {
  test('숫자가 4이상이면 전진을 하고 결과를 출력합니다.', async () => {
    mockRandoms([2, 2, 4]);
    mockQuestions(['Kim,Lee,Park', '2']);
    const logSpy = getLogSpy();
    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith('Park : -');
  });
});
