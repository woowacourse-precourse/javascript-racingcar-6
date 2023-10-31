import { Console } from "@woowacourse/mission-utils";
import InputManager from "../src/utils/InputManager";
import ERROR_MESSAGE from "../src/constants/ErrorMessage";

const mockQuestion = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};


describe('시도 횟수에 대한 테스트입니다.', () => {
  test('시도 횟수를 입력합니다.', async () => {
    // given
    const input = '3';
    const answer = '3';
    
    mockQuestion(input);

    // when
    const attemptNumber = await InputManager.inputGameAttemptNumber();

    // then
    expect(attemptNumber).toEqual(answer);
  });

  test('자연수가 아닌 숫자 입력이 들어왔을 때 에러를 발생시키고 애플리케이션을 종료합니다.', async () => {
    // given
    const input = '0';

    mockQuestion(input);

    // when & then
    await expect(InputManager.inputGameAttemptNumber()).rejects.toThrow(ERROR_MESSAGE.INPUT_NOT_NATURAL_NUMBER);
  });

  test('숫자가 아닌 입력이 들어왔을 때 에러를 발생시키고 애플리케이션을 종료합니다.', async () => {
    // given
    const input = '공습경보';

    mockQuestion(input);

    // when & then
    await expect(InputManager.inputGameAttemptNumber()).rejects.toThrow(ERROR_MESSAGE.INPUT_NOT_NUMBER);
  });
});
