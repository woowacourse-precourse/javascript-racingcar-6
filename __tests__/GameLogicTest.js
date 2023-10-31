// eslint-disable-next-line import/extensions
import { getMaxMoveCount, getRacingCarWinner } from '../src/Model/RacingCarGame.js';
import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

// eslint-disable-next-line no-undef
describe('자동차 경주 게임 로직 체크', () => {
  const checkMaxMoveCount = () => {
    const TestCase = [
      [
        { carName: 'pobi', moveCount: 5 },
        { carName: 'woni', moveCount: 3 },
        { carName: 'jun', moveCount: 4 },
      ],
      [
        { carName: 'pobi', moveCount: 6 },
        { carName: 'woni', moveCount: 6 },
        { carName: 'jun', moveCount: 6 },
      ],
    ];

    const answerMoveCount = [5, 6];
    const answerCarName = [['pobi'], ['pobi', 'woni', 'jun']];

    TestCase.forEach((testCase, idx) => {
      test('자동차 경주 최대값 확인', () => {
        expect(getMaxMoveCount(testCase)).toEqual(answerMoveCount[idx]);
      });
    });

    TestCase.forEach((testCase, idx) => {
      test('자동차 경주 우승자 확인', () => {
        expect(getRacingCarWinner(testCase)).toEqual(answerCarName[idx]);
      });
    });
  };

  checkMaxMoveCount();
});

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

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given

    const inputs = ['pobi, woni, jun, park, hong', '5'];
    const outputs = ['pobi : -', 'pobi : --', 'pobi : ---', 'park : -', 'hong : -'];
    const randoms = [4, 0, 1, 2, 3, 5, 0, 1, 2, 3, 6, 1, 0, 2, 3, 0, 1, 2, 7, 3, 0, 1, 2, 3, 8];
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
    [["pobi,javaji"]],
    [["pobi,eastjun"]],
    [[',']],
    [['qwe,']],
    [[',qweqw']],
    [['']],
    [['pobi,,jun']]
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
