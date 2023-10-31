import { handleTryNumberInput } from "../src/utils/handleInput.js";
import { Console } from "@woowacourse/mission-utils";

describe("시도 횟수 입력 함수 테스트", () => {
  test("올바른 숫자 입력", async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue("5");
    await expect(handleTryNumberInput()).resolves.toBe("5");
  });

  test("음수 입력", async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue("-3");
    await expect(handleTryNumberInput()).rejects.toThrow("[ERROR]");
  });

  test("숫자가 아닌 값을 입력", async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue("abc");
    await expect(handleTryNumberInput()).rejects.toThrow("[ERROR]");
  });

  test("빈 문자열 입력", async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue("");
    await expect(handleTryNumberInput()).rejects.toThrow("[ERROR]");
  });
});
