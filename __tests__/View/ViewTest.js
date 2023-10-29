import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../../src/View/View';
import ERROR from '../../src/constants/error';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('View 테스트', () => {
  describe('사용자로부터 입력값을 받는다.', () => {
    test('비어있는 문자열에 대해 예외 처리를 진행한다.', async () => {
      // given
      const emptyString = '';
      const validator = jest.fn();
      const view = new View();

      mockQuestions([emptyString]);

      // then
      await expect(view.readUserInput(emptyString, validator)).rejects.toThrow(
        `[ERROR] ${ERROR.message.emptyString}`,
      );
    });
  });
});
