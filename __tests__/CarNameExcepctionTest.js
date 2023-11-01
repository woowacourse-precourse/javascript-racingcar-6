import App from "../src/App.js";
import * as MissionUtils from "@woowacourse/mission-utils";

describe("자동차 이름 예외 테스트", () => {
  test("이름이 6글자 이상일 경우 에러메시지 반환", async () => {
    const app = new App();

    const INPUT_CAR_NAME = "hi,sudoldol";
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValue(INPUT_CAR_NAME);

    try {
      await app.inputCarName();
    } catch (error) {
      expect(error.message).toBe(
        "[ERROR] 자동차 이름은 1글자 이상 5글자 이하로 입력해야 합니다."
      );
    }
  });

  test("공백을 포함한 경우", async () => {
    const app = new App();

    const INPUT_CAR_NAME = "hi,,sudol";
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValue(INPUT_CAR_NAME);

    try {
      await app.inputCarName();
    } catch (error) {
      expect(error.message).toBe(
        "[ERROR] 자동차 이름은 1글자 이상 5글자 이하로 입력해야 합니다."
      );
    }
  });

  test("이름이 중복된 경우", async () => {
    const app = new App();

    const INPUT_CAR_NAME = "hello,sudol,sudol";
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValue(INPUT_CAR_NAME);

    try {
      await app.inputCarName();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 중복된 이름이 존재합니다.");
    }
  });
});
