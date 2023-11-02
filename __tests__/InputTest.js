import { MissionUtils } from '@woowacourse/mission-utils';
import Input from '../src/View/Input.js';

describe('입력 Test', () => {
  const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
  };

  test('정상적인 자동차 이름 입력', async () => {
    // given
    const inputs = ['호중,hoj,77,KHJ'];
    mockQuestions(inputs);

    // then
    expect(await Input.inputCarNames()).toEqual(['호중', 'hoj', '77', 'KHJ']);
  });

  test.each([[['khj,ghwndrla']], [['hojkim77']]])(
    '5자리 초과한 이름 입력',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // then
      await expect(Input.inputCarNames()).rejects.toThrow(
        '[ERROR] 자동차의 이름은 쉼표로 구분하여 5글자 이하로 입력해주세요.'
      );
    }
  );

  test.each([[['hoj77,hoj77']], [['KHJ,KHJ']]])(
    '중복된 이름 입력',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // then
      await expect(Input.inputCarNames()).rejects.toThrow(
        '[ERROR] 중복된 자동차 이름을 입력했습니다.'
      );
    }
  );

  test.each([[['hoj, hoj']], [['hoj,hoj ']]])(
    '시작 또는 끝 공백인 이름 입력',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // then
      await expect(Input.inputCarNames()).rejects.toThrow(
        '[ERROR] 자동차 이름 시작과 끝의 공백은 오해를 일으킬 수 있습니다.'
      );
    }
  );

  test.each([[['']], [[',']], [['hoj,,hoj']], [[',hoj,']]])(
    '빈 이름 입력',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // then
      await expect(Input.inputCarNames()).rejects.toThrow(
        '[ERROR] 이름이 없는 자동차가 있습니다.'
      );
    }
  );

  test.each([[['3']], [['03']], [['+3']], [['+03']]])(
    '정상적인 시도 횟수 입력',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // then
      expect(await Input.inputTryNum()).toBe(3);
    }
  );

  test.each([[['']], [[' ']], [['  ']]])('공백 입력', async (inputs) => {
    // given
    mockQuestions(inputs);

    // then
    await expect(Input.inputTryNum()).rejects.toThrow(
      '[ERROR] 아무 입력도 하지 않았습니다.'
    );
  });

  test.each([[['hojkim77']], [['a1']], [['1a']]])(
    '숫자 외의 입력',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // then
      await expect(Input.inputTryNum()).rejects.toThrow(
        '[ERROR] 숫자를 입력해주세요.'
      );
    }
  );

  test.each([[['-3']], [['-3']]])('음수 입력', async (inputs) => {
    // given
    mockQuestions(inputs);

    // then
    await expect(Input.inputTryNum()).rejects.toThrow(
      '[ERROR] 양수를 입력해주세요.'
    );
  });
});
