import {
  CAR_ERROR_MESSAGE,
  ERROR_PREFIX,
} from "../../src/constants/message/error";
import validateRacingCarNames from "../../src/validator/car";

describe("자동차 이름에 문제가 없는 경우", () => {
  test("자동차 이름에 문제가 없는 경우 에러를 반환하지 않는다.", () => {
    const racingCarNames = ["pobi", "woony", "jun"];

    expect(() => validateRacingCarNames(racingCarNames)).not.toThrow();
  });
});

describe("자동차 이름의 길이가 1보다 작거나 5보다 큰 경우", () => {
  test("이름의 길이가 1보다 작은 자동차가 있다면 에러를 반환한다.", () => {
    const racingCarNames = ["pobi", "woony", ""];

    expect(() => validateRacingCarNames(racingCarNames)).toThrow(
      ERROR_PREFIX + CAR_ERROR_MESSAGE.LENGTH
    );
  });

  test("이름의 길이가 5보다 큰 자동차가 있다면 에러를 반환한다.", () => {
    const racingCarNames = ["pobi", "woony", "abcdef"];

    expect(() => validateRacingCarNames(racingCarNames)).toThrow(
      ERROR_PREFIX + CAR_ERROR_MESSAGE.LENGTH
    );
  });
});

describe("중복된 자동차 이름이 존재하는 경우", () => {
  test("중복된 자동차 이름이 존재한다면 에러를 반환한다.", () => {
    const racingCarNames = ["pobi", "woony", "pobi"];

    expect(() => validateRacingCarNames(racingCarNames)).toThrow(
      ERROR_PREFIX + CAR_ERROR_MESSAGE.DUPLICATION
    );
  });
});
