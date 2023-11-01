import App from "../src/App.js";
import * as MissionUtils from "@woowacourse/mission-utils";

describe("자동차 입력 받기 및 저장 테스트", () => {
  test("입력받은 자동차 이름 목록 쉼표로 구분해 배열로 반환", async () => {
    const app = new App();

    const INPUT_CAR_NAME = "hello,sudol,hi";
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValue(INPUT_CAR_NAME);

    const CARS_ARRAY = await app.inputCarName();

    expect(CARS_ARRAY).toEqual(["hello", "sudol", "hi"]);
  });

  test("자동차 정보와 위치를 저장한 배열 반환", async () => {
    const app = new App();
    const CARS_ARRAY = ["hello", "sudol", "hi"];

    const CARS = await app.saveCarName(CARS_ARRAY);

    expect(CARS).toEqual([
      { name: "hello", position: 0 },
      { name: "sudol", position: 0 },
      { name: "hi", position: 0 },
    ]);
  });
});
