import {
  mockQuestions,
  mockRandoms,
  getLogSpy,
} from "../../src/utils/testUtils/testUtils";
import App from "../../src/App";

describe("한 번 시도의 경기 진행", () => {
  test("전진-정지 동작 처리", async () => {
    // given
    const inputs = ["pobi", "3"];
    const outputs = ["pobi : --"];
    const randoms = [4, 3, 5];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
