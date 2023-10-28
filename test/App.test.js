import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockReadLineAsync = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs[0]);
  });
};

test("사용자 입력 받는 함수", async () => {
  const inputs = ["hong,sung,soo"];
  mockReadLineAsync(inputs);
  const app = new App();
  const result = await app.carNameInput();
  expect(result).toContainEqual("hong", "sung", "soo");
});
