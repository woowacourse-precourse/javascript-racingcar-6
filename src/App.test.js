import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

describe("입력 오류 테스트", () => {
  const app = new App();

  test("자동차 이름", () => {
    expect(() => app.getCarNamesFromUser("aaaaaa")).toThrow("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  })
});