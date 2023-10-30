import App from "../src/App.js";
import { mockQuestions } from "./ApplicationTest.js"
import { MissionUtils } from "@woowacourse/mission-utils";

describe("getCarNames 함수", () => {
  test("올바르게 입력한 경우", () => {
    const input = "car1, car2, car3";
    const result = input.split(",").map(name => name.trim());
    expect(result).toEqual(["car1", "car2", "car3"]);
  });

  test.each([[""]])("이름을 입력하지 않은 경우(예외)", async (input) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.getCarNames()).rejects.toThrow("이름을 입력하지 않았습니다.");
  });

  test.each([["car1"]])("이름을 2개 이상 입력하지 않은 경우(예외)", async (input) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.getCarNames()).rejects.toThrow("이름은 2개 이상 입력해야 합니다.");
  });

  test.each([
    [["car1  car2  car3"]],
    [["car1 & car2 & car3"]]
  ])("이름을 ,(콤마)로 구분하지 않은 경우(예외)", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.getCarNames()).rejects.toThrow("이름은 ,(콤마)로 구분합니다.");
  });

  test.each([
    [["car1, carname2, car3"]],
    [["car1, car2, car3, carname4"]]
  ])("이름을 5자 이하로 입력하지 않은 경우(예외)", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.getCarNames()).rejects.toThrow("이름은 5자 이하만 가능합니다.");
  });
});