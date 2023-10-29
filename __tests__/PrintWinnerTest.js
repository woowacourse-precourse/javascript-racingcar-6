import { mockQuestions, mockRandoms, getLogSpy } from "./ApplicationTest.js";
import App from "../src/App.js";

describe("우승자 출력", () => {
  test("단일 우승자", async () => {
    const random = [1, 5, 1, 5];
    const input = ["stop,go", "2"];
    const outputs = ["최종 우승자 : go"];
    const logSpy = getLogSpy();

    mockQuestions(input);
    mockRandoms([...random]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
