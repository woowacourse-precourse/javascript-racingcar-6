import { Console } from "@woowacourse/mission-utils";
import { AttemptsException } from '../src/UserInputExcpetion.js';

const mockQuestions = (inputs) => {
    Console.readLineAsync = jest.fn();
  
    Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
};

describe('사용자 입력 예외처리 테스트', () => {
  test.each([
    [["a"]],
    [["0"]]
  ])('횟수에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);
    //then
    await expect(AttemptsException()).rejects.toThrow('[ERROR] 시도할 횟수가 잘못된 형식입니다.');
  });
});