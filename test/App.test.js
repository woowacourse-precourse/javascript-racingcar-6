import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockReadLineAsync = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs[0]);
  });
};

describe("자동차 이름 테스트", () =>{
  test("사용자 입력 받는 함수", async () => {
    const inputs = ["hong,sung,soo"];
    mockReadLineAsync(inputs);
    const app = new App();
    const result = await app.carNameInput();
    expect(result).toContainEqual("hong", "sung", "soo");
  });
  
  test("사용자 입력 예외처리", async () => {
    const inputs = ["Hongsungsoo"];
    mockReadLineAsync(inputs);
    const app = new App();
    await expect(app.carNameInput()).rejects.toThrow("[ERROR]");
  });
});

describe("게임 라운드 수 테스트", () => {
  test("사용자 입력 받는 함수", async () => {
    const inputs = [1];
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockResolvedValue(Promise.resolve(inputs[0]));
    const app = new App();
    const result = await app.gameNumberInput();
    expect(result).toBe(1);
  })
})


