import { Console } from '@woowacourse/mission-utils';
import Screen from '../src/view/Screen';

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

  test.each([[['abcdefg,h']], [['a,']], [['   ,a']]])(
    '이름의 글자 수 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const inputNames = Screen.inputNames();

      // then
      await expect(inputNames).rejects.toThrow('[ERROR]');
    },
  );

  test('중복된 이름 예외 처리', async () => {
    // given
    const inputs = ['abc,abc'];
    mockQuestions(inputs);

    // when
    const inputNames = Screen.inputNames();

    // then
    await expect(inputNames).rejects.toThrow('[ERROR]');
  });
});

describe('시도할 횟수 입력 테스트', () => {
  test.each([[['5번']], [['-5']], [['0']]])(
    '숫자나 양의 정수가 아닌 경우 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const inputCount = Screen.inputCount();

      // then
      await expect(inputCount).rejects.toThrow('[ERROR]');
    },
  );
});
