import App from "../src/App.js";
import { mockReadLineAsync } from "../src/utils/testUtils.js";

describe("getRaceCountFromUserInput", () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.restoreAllMocks();
  });

  test("숫자 입력 시 해당 숫자를 반환", async () => {
    const input = "5";
    mockReadLineAsync(input);

    const result = await app.getRaceCountFromUserInput();

    expect(result).toBe(5);
  });

  test("숫자가 아닌 값 입력 시 에러", async () => {
    const input = "five";
    mockReadLineAsync(input);

    await expect(app.getRaceCountFromUserInput()).rejects.toThrowError(
      "[ERROR] 숫자만 입력 가능합니다."
    );
  });

  test("0 이하의 숫자를 입력 시 에러", async () => {
    const input = "0";
    mockReadLineAsync(input);

    await expect(app.getRaceCountFromUserInput()).rejects.toThrowError(
      "[ERROR] 시도 횟수가 0 이하입니다."
    );
  });

  test("빈 값을 입력 시 에러", async () => {
    const input = "";
    mockReadLineAsync(input);

    await expect(app.getRaceCountFromUserInput()).rejects.toThrowError(
      "[ERROR] 숫자만 입력 가능합니다."
    );
  });
});
