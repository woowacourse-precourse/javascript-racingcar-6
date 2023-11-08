import Input from '../src/Input';
import { RULE } from '../src/constant';
import { mockQuestions } from '../testUtils';
describe('입력값 테스트', () => {
  let input;
  beforeEach(() => {
    input = new Input();
  });
  describe('자동차 이름', () => {
    test.each(['car car1 car2', 'car1/car2/car3', 'car1car2car3'])(
      `${RULE.delimiter}를 사용해 자동차 이름을 구분한다. 그렇지 않으면 예외가 발생한다.`,
      async (string) => {
        mockQuestions([string]);
        await expect(() => input.readText(false)).rejects.toThrow();
      }
    );

    test(`자동차 이름이 빈문자인 경우 에외가 발생한다.`, async () => {
      mockQuestions(['car, , car2']);
      await expect(() => input.readText(false)).rejects.toThrow();
    });

    test(`자동차 이름은 ${RULE.name.min}~${RULE.name.max}자리가 여야 한다. 그렇지 않으면 에외가 발생한다.`, async () => {
      mockQuestions(['car1234, car1, car2']);
      await expect(() => input.readText(false)).rejects.toThrow();
    });
  });

  describe('게임 횟수', () => {
    test.each(['one', undefined, '', false, null])(
      '게임 횟수는 숫자여야한다. 그렇지 않으면 예외가 발생한다.',
      async (string) => {
        mockQuestions([string]);
        await expect(() => input.readText(true)).rejects.toThrow();
      }
    );

    test.each(['-1', '-2'])(
      '게임 횟수는 0 이상 이여야한다. 그렇지 않으면 예외가 발생한다.',
      async (string) => {
        mockQuestions([string]);
        await expect(() => input.readText(true)).rejects.toThrow();
      }
    );
  });
});
