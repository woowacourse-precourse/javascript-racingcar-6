import App from "../src/App.js";
import { ERROR } from "../src/constants.js";
import { mockQuestions } from "./ApplicationTest.js";

describe("getCycleCount 메소드 테스트", () => {
  test("input 입력 테스트", async () => {
    // given
    const inputs = ["5"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(await app.getCycleCount()).toEqual("5");
  });

  test("validateNumber 예외 처리 테스트", async () => {
    // given
    const inputs = ["a"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getCycleCount()).rejects.toThrow(ERROR.CYCLE_COUNT_NUMBER);
  });
});
