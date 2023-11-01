import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("자동차 경주 게임", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test("getCarName 함수 테스트", async () => {
    const inputs = ["pobi,woni"];
    const spy = jest.spyOn(MissionUtils.Console, "readLineAsync");
    spy.mockResolvedValueOnce(inputs[0]);

    await app.getCarName();

    expect(app.cars).toEqual(inputs[0].split(","));
  });

  test("getTrial 함수 테스트", async () => {
    const input = 5;
    const spy = jest.spyOn(MissionUtils.Console, "readLineAsync");
    spy.mockResolvedValueOnce(input);

    await app.getTrial();

    expect(app.trialNumber).toEqual(Number(input));
  });

  test("getRandom 함수 테스트", () => {
    const spy = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
    spy.mockReturnValue(4);

    expect(app.getRandom()).toEqual("-");

    spy.mockReturnValue(3);
    expect(app.getRandom()).toEqual("");
  });
});
