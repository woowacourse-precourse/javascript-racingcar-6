import { InvalidPlayerNameError, TryAmountError } from "../src/utils/error.js";
import {
  assertNameValid,
  assertTryAmountValid,
} from "../src/utils/validity.js";

describe("검증 함수 테스트", () => {
  test("이름 검증", () => {
    const inputs = ["aA", "123", "a", "a1", "abcde", " a2z1V "];

    inputs.forEach((name) => {
      assertNameValid(name);
    });
  });

  test("이름 검증 - 5자 초과의 길이", () => {
    const inputs = ["123456", "1212321321asasdsad"];

    inputs.forEach((name) => {
      expect(() => {
        assertNameValid(name);
      }).toThrowError(
        new InvalidPlayerNameError(InvalidPlayerNameError.TYPE_LENGTH)
      );
    });
  });

  test("이름 검증 - 문자 사이에 공백 포함", () => {
    const inputs = ["ab cd", " a  a"];

    inputs.forEach((name) => {
      expect(() => {
        assertNameValid(name);
      }).toThrowError(
        new InvalidPlayerNameError(InvalidPlayerNameError.TYPE_SPACE_BETWEEN)
      );
    });
  });

  test("이름 검증 - 특수문자 포함", () => {
    const inputs = ["_a_", "a!", "1!", "!@#", "-_-"];

    inputs.forEach((name) => {
      expect(() => {
        assertNameValid(name);
      }).toThrowError(
        new InvalidPlayerNameError(InvalidPlayerNameError.TYPE_CONTAINS_SPECIAL)
      );
    });
  });

  test("횟수 검증", () => {
    const inputs = [1, 3, 5, 100000];

    inputs.forEach((amount) => {
      assertTryAmountValid(amount);
    });
  });

  test("횟수 검증 - 실수 입력", () => {
    const inputs = [-1.1, -0.123456, 1.1, 0.123456, Infinity, -Infinity, NaN];

    inputs.forEach((amount) => {
      expect(() => {
        assertTryAmountValid(amount);
      }).toThrowError(new TryAmountError(TryAmountError.TYPE_NOT_INTEGER));
    });
  });

  test("횟수 검증 - 1 미만 입력", () => {
    const inputs = [0, -1];

    inputs.forEach((amount) => {
      expect(() => {
        assertTryAmountValid(amount);
      }).toThrowError(
        new TryAmountError(TryAmountError.TYPE_IS_SMALL_THAN_ONE)
      );
    });
  });
});
