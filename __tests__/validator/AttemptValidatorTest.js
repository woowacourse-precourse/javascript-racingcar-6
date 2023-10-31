import {
  ATTEMPT_ERROR_MESSAGE,
  ERROR_PREFIX,
} from "../../src/constants/message/error";
import validateAttemptCount from "../../src/validator/attempt-validator";

describe("시도 횟수에 문제가 없는 경우", () => {
  test("시도 횟수에 문제가 없는 경우 에러를 반환하지 않는다.", () => {
    const attemptCount = "3";

    expect(() => validateAttemptCount(attemptCount)).not.toThrow();
  });
});

describe("시도 횟수가 숫자가 아닌 경우", () => {
  test("시도 횟수에 특수문자가 포함되는 경우 에러를 반환한다.", () => {
    const attemptCounts = [
      "1!3",
      "1@4",
      "1#5",
      "1%6",
      "1&7",
      "1*8",
      "1(9",
      "1)2",
    ];

    attemptCounts.forEach((attemptCount) =>
      expect(() => validateAttemptCount(attemptCount)).toThrow(
        ERROR_PREFIX + ATTEMPT_ERROR_MESSAGE.NOT_NUMERIC
      )
    );
  });

  test("시도 횟수에 문자가 포함되는 경우 에러를 반환한다.", () => {
    const attemptCounts = [
      "1a3",
      "1`4",
      "1'5",
      "1-6",
      "1.7",
      "1h8",
      "+19",
      "-12",
    ];

    attemptCounts.forEach((attemptCount) =>
      expect(() => validateAttemptCount(attemptCount)).toThrow(
        ERROR_PREFIX + ATTEMPT_ERROR_MESSAGE.NOT_NUMERIC
      )
    );
  });
});

describe("시도 횟수가 1이상의 정수가 아닌 경우", () => {
  test("시도 횟수가 0인 경우 에러를 반환한다.", () => {
    const attemptCount = "0";

    expect(() => validateAttemptCount(attemptCount)).toThrow(
      ATTEMPT_ERROR_MESSAGE.NOT_POSITIVE
    );
  });
});
