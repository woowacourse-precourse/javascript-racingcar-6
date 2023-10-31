import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { VALIDATION } from '../src/constants/constants.js';

class GameTest {
  constructor() {
    this.logSpy = this.getLogSpy();
  }

  mockQuestions(inputs) {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
  }

  mockRandoms(numbers) {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
  }

  getLogSpy() {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
  }

  async runGameTest(inputs, randoms, expectedOutputs) {
    this.mockQuestions(inputs);
    this.mockRandoms(randoms);

    const app = new App();
    await app.play();

    expectedOutputs.forEach(output => {
      expect(this.logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  }
}

const MOVING_FORWARD = VALIDATION.carMoveCondition.triggerNumber;
const STOP = VALIDATION.carMoveCondition.triggerNumber - 1;
const inputs = ['pobi,woni', '2'];

describe('게임 round 결과 테스트', () => {
  const gameTest = new GameTest();

  test('각 round 별 결과를 출력한다.', async () => {
    const outputs = ['pobi : -', 'woni : ', 'pobi : --', 'woni : -'];
    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD];

    await gameTest.runGameTest([...inputs], [...randoms], outputs);
  });
});

describe('게임 최종 결과 테스트', () => {
  const gameTest = new GameTest();

  test('우승자가 한명일 경우 정상적으로 출력된다.', async () => {
    const outputs = ['최종 우승자 : pobi'];
    const randoms = [MOVING_FORWARD, STOP];

    await gameTest.runGameTest([...inputs], [...randoms], outputs);
  });

  test('우승자가 여러명일 경우 정상적으로 출력된다.', async () => {
    const outputs = ['최종 우승자 : pobi, woni'];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD];

    await gameTest.runGameTest([...inputs], [...randoms], outputs);
  });
});
