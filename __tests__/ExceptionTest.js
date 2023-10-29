import { mockQuestions } from "./ApplicationTest.js";
import App from "../src/App.js";

describe("에외 테스트", () => {
  test("시도횟수 예외처리", async () => {
    const input1 = ["a,b","0"];
    mockQuestions(input1);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
