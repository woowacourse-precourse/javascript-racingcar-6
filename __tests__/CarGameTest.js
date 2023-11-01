import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils";

describe("입력 유효성 검사", () => {
  describe("자동차 이름 검사", () => {
    test("이름이 5자 이하인 경우", async () => {
      const mockReadLineAsync = jest.fn();
      mockReadLineAsync
        .mockResolvedValueOnce("pobi,woni,jun")
        .mockResolvedValueOnce("5");

      Console.readLineAsync = mockReadLineAsync;

      const app = new App();

      await expect(app.play()).resolves.not.toThrow();
    });

    test("이름이 5자 초과인 경우", async () => {
      const mockReadLineAsync = jest.fn();
      mockReadLineAsync
        .mockResolvedValueOnce("pobi,eastjun")
        .mockResolvedValueOnce("5");

      Console.readLineAsync = mockReadLineAsync;

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR] 이름이 5자 초과입니다.");
    });
  });

  describe("시도 횟수 검사", () => {
    test("시도 횟수가 유효한 경우", async () => {
      const mockReadLineAsync = jest.fn();
      mockReadLineAsync
        .mockResolvedValueOnce("pobi,woni,jun")
        .mockResolvedValueOnce("5");

      Console.readLineAsync = mockReadLineAsync;

      const app = new App();

      await expect(app.play()).resolves.not.toThrow();
    });

    test("시도 횟수가 유효하지 않은 경우 (0이하인 경우)", async () => {
      const mockReadLineAsync = jest.fn();
      mockReadLineAsync
        .mockResolvedValueOnce("pobi,woni,jun")
        .mockResolvedValueOnce("0");

      Console.readLineAsync = mockReadLineAsync;

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR] 올바른 숫자를 입력하세요.");
    });

    test("시도 횟수가 isNaN인 경우", async () => {
      const mockReadLineAsync = jest.fn();
      mockReadLineAsync
        .mockResolvedValueOnce("pobi,woni,jun")
        .mockResolvedValueOnce("abc");

      Console.readLineAsync = mockReadLineAsync;

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR] 올바른 숫자를 입력하세요.");
    });

  });
});
