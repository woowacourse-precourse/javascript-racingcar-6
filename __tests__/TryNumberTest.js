import { Validation } from "../src/utils/Validation.js";

describe('시도할 횟수 입력', () => {
  // Correct Test
  test("숫자를 입력받은 경우", () => {
    const input = "5";
    expect(input).toContain("5");
  });

  // Error Test
  test("입력을 하지 않은 경우", () => {
    const input = "";
    expect(Validation.tryNumberValidation(input)).rejects.toThrow("[ERROR]");
  });

  test("입력값에 문자가 있는 경우", () => {
    const input = "5abcd";
    expect(Validation.tryNumberValidation(input)).rejects.toThrow("[ERROR]");
  });
});