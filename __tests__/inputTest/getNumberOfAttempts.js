import { mockQuestions } from "../../src/utils/testUtils/testUtils";
import App from "../../src/App";
import { ERROR_HEADER } from "../../src/App";

describe("시도횟수 입력", () => {
  test.each([[[""]], [["0"]], [["-1"]]])(
    "1 미만의 입력값에 대한 예외 처리",
    async (inputs) => {
      //given
      mockQuestions(inputs);
      //when
      const app = new App();
      //then
      await expect(app.getNumberOfAttempts()).rejects.toThrow(ERROR_HEADER);
    }
  );
});
