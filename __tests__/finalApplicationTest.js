import App from '../src/App.js';
import {MissionUtils} from '@woowacourse/mission-utils';

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

describe('자동차 경주 게임', () => {
  test('공동 우승자가 나오는 경우에 대한 테스트', async () => {
    const inputs = ['a,b,c,d', '3'];
    const firstTrial = [4, 4, 4, 4];
    const secondTrial = [3, 4, 4, 4];
    const thirdTrial = [3, 3, 3, 3];
    const randoms = [...firstTrial, ...secondTrial, ...thirdTrial];
    const firstResult = '\n실행 결과\na : -\nb : -\nc : -\nd : -\n\n';
    const secondResult = 'a : -\nb : --\nc : --\nd : --\n\n';
    const thirdResult = 'a : -\nb : --\nc : --\nd : --\n\n';
    const winner = '최종 우승자 : b, c, d';
    const outputs = [firstResult, secondResult, thirdResult, winner];
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
