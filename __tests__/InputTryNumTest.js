import App from "../src/App";
import { mockQuestions } from "./ApplicationTest";
describe("시도횟수에 대한 예외처리", () => {
  const app = new App();

  test("0보다 큰 수이다.", async () => {
    const input = ["pobi,woni", "0"];
    // given

    mockQuestions(input);
    // then

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
  test("숫자이다.", async () => {
    const input = ["pobi,woni", "c"];
    // given
    mockQuestions(input);
    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
