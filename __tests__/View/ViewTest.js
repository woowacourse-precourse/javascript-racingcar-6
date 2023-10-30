import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../../src/View/View';
import ERROR from '../../src/constants/error';
import InputView from '../../src/View/InputView';

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
});
