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

const getCallSpy = (object, method) => {
  const callSpy = jest.spyOn(object, method);
  callSpy.mockClear();
  return callSpy;
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

  test('자동차 이름 입력 기능 확인', async () => {
    // given
    const PROMPT = '경주할 자동차 이름을 입력하세요.'
    const inputs = ['pobi,woni'];

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.getCarNames();

    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(expect.stringContaining(PROMPT));
  });

  test('라운드 횟수 입력 기능 확인', async () => {
    // given
    const PROMPT = '시도할 횟수는 몇 회인가요?';
    const inputs = ['2'];

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.getNumberOfRounds();

    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(expect.stringContaining(PROMPT));
  });

  test('각 자동차별 Car 객체 생성 확인', () => {
    // given
    const playerNames = ['pobi', 'woni', 'woowa'];
    const numberOfPlayers = playerNames.length;
    const STARTING_MOVES = 0;

    // when
    const app = new App();
    const players = app.createPlayers(playerNames);

    // then
    expect(players.length).toBe(numberOfPlayers);
    players.forEach((player, i) => {
      expect(player.name).toBe(playerNames[i]);
      expect(player.moves).toBe(STARTING_MOVES);
    });
  });

  test('입력한 횟수만큼 라운드 결과 출력', async () => {
    // given
    const ROUNDS = 5;
    const inputs = ['pobi,woni', ROUNDS];
    const app = new App();
    const logSpy = getCallSpy(app, 'printRoundResults');

    mockQuestions(inputs);

    // when
    await app.play();

    // then
    expect(logSpy.mock.calls).toHaveLength(ROUNDS);
  });

  test('우승자 추출', () => {
    // given
    const inputs = [
      [{ name: 'pobi', moves: 5 }, { name: 'woni', moves: 2 }, { name: 'woowa', moves: 2 }],
      [{ name: 'pobi', moves: 5 }, { name: 'woni', moves: 5 }, { name: 'woowa', moves: 5 }]
    ];
    const outputs = ['pobi', 'pobi, woni, woowa'];

    // when
    const app = new App();

    // then
    inputs.forEach((input, i) => {
      expect(app.getWinner(input)).toBe(outputs[i]);
    });
  });

  test.each([
    [['pobi,javaji']],
    [['pobi']],
    [['pobi,']],
    [['pobi,pobi,woni']]
  ])('이름에 대한 예외 처리', async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );

  test.each([
    [['abc']],
    [['4.5']],
    [['']]
  ])('라운드 횟수에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getNumberOfRounds()).rejects.toThrow('[ERROR]');
  });
});
