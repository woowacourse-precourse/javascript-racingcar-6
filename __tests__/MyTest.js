import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import CarRacingGame from '../src/CarRacingGame';

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
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 게임', () => {
  test('자동차 이름입력', async () => {
    const inputs = ['pobi,woni'];
    mockQuestions(inputs);

    // given
    const game = new CarRacingGame();
    const carNames = await game.getCarNames();
    expect(carNames).toEqual('pobi,woni');
  });

  test('시도 횟수 입력', async () => {
    const inputs = ['5'];
    mockQuestions(inputs);

    // given
    const game = new CarRacingGame();
    const tryCount = await game.getTryCount();
    expect(tryCount).toEqual('5');
  });

  test('문자 길이 5이상 혹은 0', async () => {
    const inputs = ['pobi,woni,,'];
    mockQuestions(inputs);

    // given
    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test('배열에 저장되어 있는 값 확인(name)', async () => {
    const inputs = 'pobi,woni';
    const expectedNames = inputs.split(',').map(name => name.trim());
    mockQuestions([inputs]);

    // given
    const game = new CarRacingGame();
    await game.gameStart();
    const array = [...game.getCarNameArray()];

    array.forEach((element, index) => {
      expect(element.getName()).toEqual(expectedNames[index]);
    });
  });

  test('배열에 저장되어 있는 값 확인(advanceCount)', async () => {
    const inputs = 'pobi,woni';
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    const result = [1,0]
    mockQuestions([inputs,'1']);
    mockRandoms([...randoms]);
    // given
    const game = new CarRacingGame();
    await game.gameStart();
    const array = [...game.getCarNameArray()];

    array.forEach((element, index) => {
      expect(element.getAdvanceCount()).toEqual(result[index]);
    });
  });

  test('각 시도에서 상태 출력', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();
    
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
