import { Console } from "@woowacourse/mission-utils";
import InputManager from "../src/utils/InputManager";

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
  })
})