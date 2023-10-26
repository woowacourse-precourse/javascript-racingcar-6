import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe("어플리케이션 입력 테스트", () => {
  test("사용자 숫자 입력에서 숫자 형식을 지키는 지 확인", async () => {
    //given
    const input = "hello";

    mockQuestions(input);

    //when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
