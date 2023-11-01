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

    const PROGRESS_PRINT = console.log;
    console.log = jest.fn();

    await app.play();

    expect(console.log).toHaveBeenCalledWith("sudol : -");

    console.log = PROGRESS_PRINT;
  });

  test("무작위 수가 3 이하일 경우 정지", async () => {
    const app = new App();

    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValueOnce("sudol")
      .mockResolvedValueOnce("1");

    jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(3);

    const PROGRESS_PRINT = console.log;
    console.log = jest.fn();

    await app.play();

    expect(console.log).not.toHaveBeenCalledWith("sudol : -");

    console.log = PROGRESS_PRINT;
  });
});
