import { assertNameValid, assertTryAmountValid } from "../src/utils/validity";

describe("검증 함수 테스트", () => {
  test("이름 검증", () => {
    const pass = ["aA", "123", "a", "a1", "abcde", " a2z1V "];
    const fail = [
      "ab cd",
      "_a_",
      "a!",
      "1!",
      "!@#",
      "-_-",
      " a a ",
      "123456",
      "",
    ];

    pass.forEach((name) => {
      assertNameValid(name);
    });

    fail.forEach((name) => {
      expect(assertNameValid(name)).rejects.toThrow("[ERROR]");
    });
  });

  test("횟수 검증", () => {
    const pass = [1, 3, 5, 100000];
    const fail = [
      -1,
      -1.1,
      -0.123456,
      0,
      1.1,
      0.123456,
      Infinity,
      -Infinity,
      NaN,
      -NaN,
    ];

    pass.forEach((amount) => {
      assertTryAmountValid(amount);
    });

    fail.forEach((amount) => {
      expect(assertNameValid(amount)).rejects.toThrow("[ERROR]");
    });
  });
});
