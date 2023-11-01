import { Console } from '@woowacourse/mission-utils';
import getUserInput from '../src/utils/getUserInput';
import isValidCarNameString from '../src/modules/isValidCarNameString';
import isValidAttempNumber from '../src/modules/isValidAttempNumber';

const mockQuestions = (input) => {
  Console.readLineAsync = jest.fn().mockResolvedValue(input);
};

describe('사용자 입력 함수 테스트', () => {
  let input = '';

  test('유효한 자동차 이름을 입력하면 입력값을 반환한다.', async () => {
    input = 'pobi,woni,jun';
    mockQuestions(input);
    const userInput = await getUserInput('자동차 이름 입력', isValidCarNameString);

    expect(userInput).toBe(input);
  });

  test.each(['pobi,javaji', 'pobi,eastjun'])('이름에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // then
    await expect(getUserInput('자동차 이름 입력', isValidCarNameString)).rejects.toThrow('[ERROR]');
  });

  test('유효한 시도 횟수를 입력하면 입력값을 반환한다.', async () => {
    input = '4';
    mockQuestions(input);
    const userInput = await getUserInput('시도 횟수 입력', isValidAttempNumber);

    expect(userInput).toBe(input);
  });

  test.each(['1e3', '15$'])('시도 횟수에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // then
    await expect(getUserInput('시도 횟수 입력', isValidAttempNumber)).rejects.toThrow('[ERROR]');
  });
});
