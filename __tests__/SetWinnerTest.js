import App from "../src/App.js";
import { getLogSpy } from "./ApplicationTest";

describe("setWinner 메소드 테스트", () => {
  test("우승자 1명 출력 테스트", async () => {
    // given
    const participant = ["pobi", "woni"];
    const count = [4, 3];
    const outputs = ["최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.participant = participant;
    app.count = count;

    app.setWinner();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("우승자 2명 출력 테스트", async () => {
    const participant = ["pobi", "woni"];
    const count = [2, 2];
    const outputs = ["최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.participant = participant;
    app.count = count;

    app.setWinner();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
