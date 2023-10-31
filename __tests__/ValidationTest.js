import { Console } from '@woowacourse/mission-utils';
import Screen from '../src/Screen';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 이름 입력 테스트', () => {
  test.each([[['abc,defg,hi']], [['abc ,defg, hi ']]])(
    '쉼표 기준 구분',
    async (inputs) => {
      // given
      const outputs = ['abc', 'defg', 'hi'];
      mockQuestions(inputs);

      // when
      const inputNames = await Screen.inputNames();

      // then
      expect(inputNames).toStrictEqual(outputs);
    },
  );
});
