import { Console } from '@woowacourse/mission-utils';
import RacingGameInputManager from '../src/racingcar/lib/classes/RacingGameInputManager';

// 사용자 입력을 가로채기 위한 모의 함수를 만드는 함수
const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const inputManager = new RacingGameInputManager();

describe('자동차 경주 게임', () => {
  const validNameList = [
    [['pobi,woni']],
    [['pobi,zxxng,jena']],
    [['pobi,woni,jun,zxxng']],
  ];
  const invalidNameList = [
    [['pobi,javaji']],
    [['pobi,eastjun']],
    [['zxxng']],
    [['123,233,233']],
  ];

  test.each(validNameList)('유효한 이름 목록', async (inputs) => {
    // 주어진 입력을 모의화
    mockQuestions(inputs);
    await expect(inputManager.getRacingCars()).resolves.not.toThrow('[ERROR]');
  });

  test.each(invalidNameList)('유효하지 않은 이름 목록', async (inputs) => {
    mockQuestions(inputs);
    await expect(inputManager.getRacingCars()).rejects.toThrow('[ERROR]');
  });

  const validNumberList = ['1', '2', '3', '4', '5'];
  const invalidNumberList = ['0', '-2', '2번', 'two'];

  validNumberList.forEach((input) => {
    test(`유효한 숫자 목록 - ${input}`, async () => {
      mockQuestions([input]);
      await expect(inputManager.getPlayCount()).resolves.not.toThrow('[ERROR]');
    });
  });
  invalidNumberList.forEach((input) => {
    test(`유효하지 않은 숫자 목록 - ${input}`, async () => {
      mockQuestions([input]);
      await expect(inputManager.getPlayCount()).rejects.toThrow('[ERROR]');
    });
  });
});
