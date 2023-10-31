import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 횟수 입력 테스트', () => {
  test('올바른 게임 횟수 입력 테스트', async () => {
    // given
    const input = ['5'];
    const output = '5';
    mockQuestions(input);

    // when
    const result = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?')

    // then
    expect(result).toEqual(output);
  });
  
  test.each([
    [['k']],
    [[0]],
    [['-1']],
    [['0']]
  ])("게임 횟수 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getRoundNumInput()).rejects.toThrow("[ERROR]");
  });
});
