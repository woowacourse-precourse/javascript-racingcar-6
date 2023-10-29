import { mockQuestions } from "./ApplicationTest.js";
import App from "../src/App.js";

describe("시도 횟수 입력", () => {

  test.each([
    [["a,b","0"]],
    [["a,b","-1"]],
    [["a,b","asd"]],
    [["a,b",""]]
  ])("시도 횟수 예외처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });


});
