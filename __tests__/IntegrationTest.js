import { mockQuestions, mockRandoms, getLogSpy } from "../src/utils/testUtils";
import App from "../src/App";

describe("통합 테스트", () => {
  const ERROR_CASE_1 = [["lurgi"]];
  const ERROR_CASE_2 = [["lurgi,car1", "0"]];
  test.each([ERROR_CASE_1, ERROR_CASE_2])("에러 테스트", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  const MOVING_FORWARD = 4;
  const STOP = 3;
  const PASS_CASE_1 = [
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
  ];
  const PASS_CASE_2 = [
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
  ];
  const PASS_CASE_3 = [
    ["lurgi,car1", "2"],
    [
      "lurgi : -",
      "car1 : -",
      "lurgi : --",
      "car1 : --",
      "최종 우승자 : lurgi, car1",
    ],
    [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
  ];
  test.each([PASS_CASE_1, PASS_CASE_2, PASS_CASE_3])(
    "통과 테스트",
    async (inputs, outputs, randoms) => {
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([...randoms]);

      const app = new App();
      await app.play();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    }
  );
});
