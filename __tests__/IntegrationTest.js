import { mockQuestions, mockRandoms, getLogSpy } from "../src/utils/testUtils";
import App from "../src/App";

async function integrationTest({ inputs, outputs, randoms, type = "error" }) {
  mockQuestions(inputs);
  const app = new App();
  if (type === "error") {
    await expect(app.play()).rejects.toThrow("[ERROR]");
  }
  if (type === "pass") {
    const logSpy = getLogSpy();
    mockRandoms(randoms);

    await app.play();
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  }
}

describe("통합 테스트", () => {
  const ERROR_CASES = [[["lurgi"]], [["lurgi,car1", "0"]]];
  test.each(ERROR_CASES)("에러 테스트", async (inputs) => {
    await integrationTest({ inputs });
  });

  const MOVING_FORWARD = 4;
  const STOP = 3;
  const PASS_CASES = [
    [
      ["lurgi,car1,car2", "3"],
      [
        "lurgi : -",
        "car1 : ",
        "car2 : -",
        "lurgi : --",
        "car1 : -",
        "car2 : --",
        "lurgi : ---",
        "car1 : -",
        "car2 : --",
        "최종 우승자 : lurgi",
      ],
      [
        MOVING_FORWARD,
        STOP,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        STOP,
        STOP,
      ],
    ],
    [
      ["lurgi,jeong,woo", "2"],
      [
        "lurgi : ",
        "jeong : ",
        "woo : ",
        "lurgi : ",
        "jeong : ",
        "woo : ",
        "최종 우승자 : lurgi, jeong, woo",
      ],
      [STOP, STOP, STOP, STOP, STOP, STOP],
    ],
    [
      ["lurgi,car1", "2"],
      [
        "lurgi : -",
        "car1 : -",
        "lurgi : --",
        "car1 : --",
        "최종 우승자 : lurgi, car1",
      ],
      [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
    ],
  ];
  test.each(PASS_CASES)("통과 테스트", async (inputs, outputs, randoms) => {
    await integrationTest({ inputs, outputs, randoms, type: "pass" });
  });
});
