import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("forward 메소드 테스트", () => {
  test("전진 테스트", async () => {
    // given
    const GO = 4;
    jest
      .spyOn(MissionUtils.Random, "pickNumberInRange")
      .mockReturnValueOnce(GO);

    // when
    const app = new App();

    // then
    expect(await app.forward()).toEqual(true);
  });

  test("정지 테스트", async () => {
    // given
    const STOP = 3;
    jest
      .spyOn(MissionUtils.Random, "pickNumberInRange")
      .mockReturnValueOnce(STOP);

    // when
    const app = new App();

    // then
    expect(await app.forward()).toEqual(false);
  });
});
