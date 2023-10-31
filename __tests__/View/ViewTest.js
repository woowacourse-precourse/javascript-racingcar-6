import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../../src/View/View';
import ERROR from '../../src/constants/error';
import InputView from '../../src/View/InputView';
import OutputView from '../../src/View/OutputView';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('View 테스트', () => {
  let view;
  const emptyString = '';

  beforeEach(() => {
    view = new View();
  });

  /**
   * InputView 테스트
   */
  describe('사용자로부터 입력값을 받는다.', () => {
    test('InputView는 비어있는 문자열에 대해 예외 처리를 진행한다.', async () => {
      // given
      mockQuestions([emptyString]);

      // then
      await expect(InputView.readLineAsync(emptyString)).rejects.toThrow(
        `[ERROR] ${ERROR.message.emptyString}`,
      );
    });
  });

  describe('사용자로부터 자동차 이름을 입력받는다.', () => {
    const validCarNames = 'pobi,crong,honux';
    const invalidCarNames = 'pobipobi,crongcrong,honuxhonux';

    test('비어있는 문자열에 대해 예외 처리를 진행한다.', async () => {
      // given
      mockQuestions([emptyString]);

      // then
      await expect(view.readCarName()).rejects.toThrow(
        `[ERROR] ${ERROR.message.emptyString}`,
      );
    });

    test('자동차 이름을 입력받는다.', async () => {
      // given
      mockQuestions([validCarNames]);

      // when
      const result = await view.readCarName();

      // then
      expect(result).toEqual(validCarNames.split(','));
    });

    test('자동차 이름이 5자를 초과하는 경우 예외 처리를 진행한다.', async () => {
      // given
      mockQuestions([invalidCarNames]);

      // then
      await expect(view.readCarName()).rejects.toThrow(
        `[ERROR] ${ERROR.message.invalidCarNameLength}`,
      );
    });

    test('자동차 이름이 중복되는 경우 예외 처리를 진행한다.', async () => {
      // given
      const duplicateCarNames = 'pobi,pobi,cron';
      mockQuestions([duplicateCarNames]);

      // then
      await expect(view.readCarName()).rejects.toThrow(
        `[ERROR] ${ERROR.message.duplicateCarName}`,
      );
    });
  });

  describe('사용자로부터 라운드를 입력받는다.', () => {
    const validRound = '5';
    const invalidRound = '0';

    test('비어있는 문자열에 대해 예외 처리를 진행한다.', async () => {
      // given
      mockQuestions([emptyString]);

      // then
      await expect(view.readRound()).rejects.toThrow(
        `[ERROR] ${ERROR.message.emptyString}`,
      );
    });

    test('라운드를 입력받는다.', async () => {
      // given
      mockQuestions([validRound]);

      // when
      const result = await view.readRound();

      // then
      expect(result).toEqual(parseInt(validRound, 10));
    });

    test('라운드가 0인 경우 예외 처리를 진행한다.', async () => {
      // given
      mockQuestions([invalidRound]);

      // then
      await expect(view.readRound()).rejects.toThrow(
        `[ERROR] ${ERROR.message.invalidRound}`,
      );
    });
  });

  /**
   * OutputView 테스트
   */
  describe('각 라운드별로 자동차 이름과 위치를 출력한다.', () => {
    beforeEach(() => {
      jest.spyOn(OutputView, 'print');
    });

    const mockRaceResult = [
      {
        raceResult: [
          [
            { name: 'pobi', position: 0 },
            { name: 'crong', position: 0 },
            { name: 'honux', position: 1 },
          ],
        ],
        winner: ['honux'],
        expected: `\n실행 결과\npobi : \ncrong : \nhonux : -\n`,
      },
      {
        raceResult: [
          [
            { name: 'pobi', position: 1 },
            { name: 'crong', position: 1 },
            { name: 'honux', position: 1 },
          ],
          [
            { name: 'pobi', position: 1 },
            { name: 'crong', position: 2 },
            { name: 'honux', position: 1 },
          ],
        ],
        winner: ['crong'],
        expected: `\n실행 결과\npobi : -\ncrong : -\nhonux : -\n\npobi : -\ncrong : --\nhonux : -\n`,
      },
      {
        raceResult: [
          [
            { name: 'pobi', position: 0 },
            { name: 'crong', position: 1 },
            { name: 'honux', position: 0 },
          ],
          [
            { name: 'pobi', position: 1 },
            { name: 'crong', position: 2 },
            { name: 'honux', position: 0 },
          ],
          [
            { name: 'pobi', position: 2 },
            { name: 'crong', position: 3 },
            { name: 'honux', position: 1 },
          ],
        ],
        winner: ['crong'],
        expected: `\n실행 결과\npobi : \ncrong : -\nhonux : \n\npobi : -\ncrong : --\nhonux : \n\npobi : --\ncrong : ---\nhonux : -\n`,
      },
    ];

    mockRaceResult.forEach(({ raceResult, winner, expected }) => {
      test(`자동차 이름과 위치를 출력한다. (${raceResult.length} 라운드)`, () => {
        // when
        view.printRaceResult({ winner, raceResult });

        // then
        expect(OutputView.print).toHaveBeenCalledWith(expected);
      });
    });
  });

  describe('우승자를 출력한다.', () => {
    beforeEach(() => {
      jest.spyOn(OutputView, 'print');
    });

    const mockRaceResult = [
      {
        raceResult: [
          [
            { name: 'pobi', position: 1 },
            { name: 'crong', position: 0 },
            { name: 'honux', position: 1 },
          ],
          [
            { name: 'pobi', position: 2 },
            { name: 'crong', position: 1 },
            { name: 'honux', position: 2 },
          ],
        ],
        winner: ['pobi', 'honux'],
        expected: '최종 우승자 : pobi, honux',
      },
    ];

    mockRaceResult.forEach(({ raceResult, winner, expected }) => {
      test(`우승자를 출력한다. (${winner.length}명)`, () => {
        // when
        view.printRaceResult({ winner, raceResult });

        // then
        expect(OutputView.print).toHaveBeenCalledWith(expected);
      });
    });
  });
});
