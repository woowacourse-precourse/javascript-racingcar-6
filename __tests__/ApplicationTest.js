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

describe('자동차 경주 게임', () => {
  test('전진-정지', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -'];
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
  test('공동 우승', async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -', '최종 우승자 : pobi, woni'];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD];
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

  test.each([
    [['']], // #1.1 
    [['pobi,woni,']], // #1.1
    [['##,%%,!']], // #1.2
    [['1,2,3']], // #1.2
    [['pobi']], // #1.3 
    [['pobi,javaji']], // #1.4 
    [['pobi,eastjun']], // #1.4 
    [['pobi,pobi']], // #1.5
    [['pobi,,,java']] // #1.6
  ])('이름에 대한 예외 처리 getCarName()',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    }
  );
  test.each([
    [['pobi,woni','']], // #2.1
    [['pobi,woni','pobi,woni']], // #2.2
    [['pobi,woni','0']], // #2.3
  ])('횟수에 대한 예외 처리 getGameCount()',
  async(inputs)=>{

    mockQuestions(inputs);
    

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  }
  )
});
