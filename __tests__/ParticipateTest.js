import App from "../src/App.js";
import { ERROR } from "../src/constants.js";
import { mockQuestions } from "./ApplicationTest.js";

describe("participate 메소드 테스트", () => {
  test("participant 및 count 대입 테스트", async () => {
    // given
    const inputs = ["pobi,woni"];
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.participate();

    // then
    expect(app.participant).toEqual(["pobi", "woni"]);
    expect(app.count).toEqual([0, 0]);
  });

  test("participate 예외 처리 테스트", async () => {
    // given
    const inputs = ["aaaaaa,bbb,ccc"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.participate()).rejects.toThrow(ERROR.NAME_LENGTH);
  });
});
