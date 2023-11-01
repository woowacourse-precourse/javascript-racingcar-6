import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { initializeGame } from '../src/gameExport.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const mockInputCarName = (names) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockReturnValueOnce(
    Promise.resolve(names.join(',')),
  );
};

const mockGameCount = (count) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockReturnValueOnce(
    Promise.resolve(count.toString()),
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 게임', () => {
  // 테스트 전에 항상 실행할 작업
  beforeEach(() => {
    // 각 테스트 시작 전에 모킹을 초기화합니다.
    jest.resetAllMocks();
  });

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

  test.each([
    [['pobi,javaji']],
    [['pobi,eastjun']],
    [[''], ['   ']],
    [['pobi,toooolong']],
    [['pobi,pobi']],
  ])('이름에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('initializeGame 함수에서 예외 발생하는 경우', async () => {
    mockInputCarName(['pobi', 'pobi']);
    await expect(initializeGame()).rejects.toThrow('[ERROR] ');
  });
});
