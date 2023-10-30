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

  beforeEach(() => {
    view = new View();
  });

  describe('사용자로부터 입력값을 받는다.', () => {
    test('InputView는 비어있는 문자열에 대해 예외 처리를 진행한다.', async () => {
      // given
      const emptyString = '';

      mockQuestions([emptyString]);

      // then
      await expect(InputView.readLineAsync(emptyString)).rejects.toThrow(
        `[ERROR] ${ERROR.message.emptyString}`,
      );
    });
  });

  describe('사용자로부터 자동차 이름을 입력받는다.', () => {
    test('비어있는 문자열에 대해 예외 처리를 진행한다.', async () => {
      // given
      const emptyString = '';

      mockQuestions([emptyString]);

      // then
      await expect(view.readCarName()).rejects.toThrow(
        `[ERROR] ${ERROR.message.emptyString}`,
      );
    });

    test('자동차 이름을 입력받는다.', async () => {
      // given
      const validCarNames = 'pobi,crong,honux';

      mockQuestions([validCarNames]);

      // when
      const result = await view.readCarName();

      // then
      expect(result).toEqual(validCarNames.split(','));
    });

    test('자동차 이름이 5자를 초과하는 경우 예외 처리를 진행한다.', async () => {
      // given
      const invalidCarNames = 'pobipobi,crongcrong,honuxhonux';

      mockQuestions([invalidCarNames]);

      // then
      await expect(view.readCarName()).rejects.toThrow(
        `[ERROR] ${ERROR.message.invalidCarNameLength}`,
      );
    });
  });
});
