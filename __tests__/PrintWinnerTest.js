import App from "../src/App";
import { mockRandoms, mockQuestions, getLogSpy } from "./ApplicationTest";
describe("우승자 출력", () => {
  const app = new App();
  test("단일 우승자 출력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const randoms = [MOVING_FORWARD, STOP];
    const message = ["최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    await app.play();

    // then
    message.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("공동 우승자 출력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ["pobi,woni", "1"];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD];
    const message = ["최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    await app.play();

    // then
    message.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
