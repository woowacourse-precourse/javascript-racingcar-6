import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('getCarName', () => {
  const app = new App();

  test('자동차 이름을 입력 받아서 값을 반환한다', async () => {
    const input = 'woowa, tech, pre';

    mockQuestions(input);

    const result = await app.getCarName();

    expect(result).toStrictEqual({
      woowa: 0,
      tech: 0,
      pre: 0,
    });
  });

  describe('getTryCount', () => {
    test('시도횟수를 입력받아서 숫자 값을 반환한다', async () => {
      const input = '4';

      mockQuestions(input);

      const result = await app.getTryCount();

      expect(result).toBe(4);
    });
  });

  describe('validateCarNames', () => {
    const app = new App();

    test('자동차 입력값에 아무 것도 입력하지 않은 경우 에러를 반환한다', () => {
      const racingCarNames = [''];

      const ERROR_MESSAGE = '[ERROR] 입력값이 잘못된 형식입니다.';

      expect(() => {
        app.validateCarNames(racingCarNames);
      }).toThrow(ERROR_MESSAGE);
    });

    test('자동차 이름 입력값이 5글자를 초과하는 경우 에러를 반환한다', () => {
      const racingCarNames = ['woowa', 'tech', 'preOnBoarding'];

      const ERROR_MESSAGE = '[ERROR] 자동차 이름은 5자 이하만 가능합니다.';

      expect(() => {
        app.validateCarNames(racingCarNames);
      }).toThrow(ERROR_MESSAGE);
    });
  });

  describe('validateTryCount', () => {
    const app = new App();

    test.each([
      [0, '[ERROR] 숫자가 잘못된 형식입니다.'],
      [NaN, '[ERROR] 숫자가 잘못된 형식입니다.'],
    ])('에러 메시지를 반환한다', (count, expected) => {
      expect(() => {
        app.validateTryCount(count);
      }).toThrow(expected);
    });
  });

  describe('getRandomNumber', () => {
    const result = app.getRandomNumber();

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(9);
  });

  describe('moveForward', () => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    MissionUtils.Random.pickNumberInRange.mockImplementation(() => 5);

    test('랜덤 숫자가 4 이상일 경우 객체에 값을 1씩 증가시킨다', () => {
      // console.log('mock', mockRandoms([5]));

      const result = app.moveForward(2);

      expect(result).toBe(3);
    });
  });

  describe('executeGameRound', () => {
    test('시도횟수만큼 게임을 실행시켜 결과값을 반환한다.', () => {
      MissionUtils.Random.pickNumberInRange = jest.fn();
      MissionUtils.Random.pickNumberInRange.mockImplementation(() => 5);
      const tryCount = 3;
      const gameRound = { woowa: 0, tech: 0, pre: 0 };

      expect(app.executeGameRound(gameRound, tryCount)).toStrictEqual({
        woowa: 3,
        tech: 3,
        pre: 3,
      });
    });
  });

  describe('getHyphensByNumber', () => {
    test('점수대로 하이픈 문자를 반환한다', () => {
      const score = 4;

      const result = app.getHyphensByNumber(score);

      expect(result).toBe('----');
    });
  });

  describe('getFinalWinner', () => {
    test('최종 우승자를 반환한다', () => {
      const finalScore = { woowa: 3, tech: 4, pre: 4 };

      const result = app.getFinalWinner(finalScore);

      expect(result).toBe('tech,pre');
    });
  });

  describe('printGameRound', () => {
    const getLogSpy = () => {
      const logSpy = jest.spyOn(MissionUtils.Console, 'print');
      logSpy.mockClear();
      return logSpy;
    };

    test('게임 라운드 결과를 출력한다', () => {
      const logspy = getLogSpy();
      const gameRound = { woowa: 1, tech: 2, pre: 1 };

      app.printGameRound(gameRound);

      const printRounds = ['woowa : -', 'tech : --', 'pre : -'];

      printRounds.forEach((round) => {
        expect(logspy).toHaveBeenCalledWith(round);
      });
    });
  });
});
