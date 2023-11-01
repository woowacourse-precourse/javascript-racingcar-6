import App from "../src/App.js";
import * as MissionUtils from "@woowacourse/mission-utils";

describe("무작위 수에 따른 전진 테스트", () => {
  test("무작위 수가 4 이상일 경우 전진", async () => {
    const app = new App();

    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValueOnce("sudol")
      .mockResolvedValueOnce("1");

    jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(4);

    const CONSOLE_PRINT = jest.spyOn(console, "log").mockImplementation();

    await app.play();

    expect(CONSOLE_PRINT).toHaveBeenCalledWith("-");
  });

  test("무작위 수가 3 이하일 경우 정지", async () => {
    const app = new App();

    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValueOnce("sudol")
      .mockResolvedValueOnce("1");

    jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(3);

    const CONSOLE_PRINT = jest.spyOn(console, "log").mockImplementation();

    await app.play();

    expect(CONSOLE_PRINT).not.toHaveBeenCalledWith("-");
  });
});
