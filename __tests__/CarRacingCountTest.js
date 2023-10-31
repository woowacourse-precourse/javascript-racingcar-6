import { Console } from "@woowacourse/mission-utils";
import CarRacing from "../src/CarRacing";
import { ErrorMessage } from "../src/common/message";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("입력한 게임 횟수 검증 테스트", () => {
  let racing;

  beforeEach(() => {
    racing = new CarRacing();
  });

  test("입력한 값이 양의 자연수가 아닐 경우", async () => {
    mockQuestions(["a", "숫자", " ", "-1", "0"]);
    await expect(racing.readGameCount()).rejects.toThrow(
      ErrorMessage.GAME_COUNT_ERROR_MESSAGE
    );
  });
});
