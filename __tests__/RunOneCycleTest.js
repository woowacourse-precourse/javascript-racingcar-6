import App from "../src/App.js";
import { mockRandoms, getLogSpy } from "./ApplicationTest";

describe("runOneCycle 메소드 테스트", () => {
  test("출력 테스트", async () => {
    // given
    const participant = ["pobi", "woni"];
    const count = [0, 0];
    const outputs = ["pobi : -", "woni : "];
    const GO = 4;
    const STOP = 3;
    const logSpy = getLogSpy();

    mockRandoms([GO, STOP]);

    // when
    const app = new App();
    app.participant = participant;
    app.count = count;

    await app.runOneCycle();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
