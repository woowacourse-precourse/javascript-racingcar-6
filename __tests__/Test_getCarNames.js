import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockResolvedValueOnce(inputs.shift());
};

describe("getCarNames 메서드 테스트", () => {
  // beforeAll(() => {
  //   MissionUtils.Console.readLineAsync = jest.fn();
  // });

  test("올바르게 입력한 경우", async () => {
    mockQuestions(["car1, car2, car3"]);
    const app = new App();
    const result = await app.getCarNames();
    expect(result).toEqual(["car1", "car2", "car3"]);
  });

  test("이름을 입력하지 않은 경우(예외)", async () => {
    mockQuestions([""]);
    const app = new App();
    await expect(app.getCarNames()).rejects.toThrow("이름을 입력하지 않았습니다.");
  });

  test("이름을 2개 이상 입력하지 않은 경우(예외)", async () => {
    mockQuestions(["car1"]);
    const app = new App();
    await expect(app.getCarNames()).rejects.toThrow("이름은 2개 이상 입력해야 합니다.");
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