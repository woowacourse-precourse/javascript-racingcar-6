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

describe('App Class test', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe('getPlayerInput', () => {
    test('사용자 이름 입력', async () => {
      const inputs = ['pobi', 'manu,max', 'jeong'];
      mockQuestions([inputs]);

      const PLAYER_NAME = await app.getPlayerName();
      expect(PLAYER_NAME).toBe(inputs);
    });
  });
});
