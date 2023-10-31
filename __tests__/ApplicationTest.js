import App from "../src/App.js";
import {
  getLogSpy,
  mockQuestions,
  mockRandoms,
} from "../src/testUtils/testUtil.js";

describe("자동차 경주 게임", () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;

  test("전진-정지", async () => {
    // given
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
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

  //우승자 프린트 하는 테스트 작성하기
  test("공동 우승자", async () => {
    // given
    const inputs = ["pobi,woni", "2"];
    const outputs = ["pobi : ", "woni : -", "pobi : -", "woni : -"];
    const randoms = [STOP, MOVING_FORWARD, MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("계속 정지일 때", async () => {
    // given
    const inputs = ["pobi,woni", "2"];
    const outputs = ["pobi : ", "woni : "];
    const randoms = [STOP, STOP, STOP, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("역전 당했을 때", async () => {
    // given
    const inputs = ["pobi,woni", "3"];
    const outputs = [
      "pobi : ",
      "woni : -",
      "pobi : -",
      "woni : -",
      "pobi : --",
      "woni : -",
    ];
    const randoms = [
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
