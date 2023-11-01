// validation.test.js

import { isValidCarName } from "../src/validation.js";

describe("자동차 이름 유효성 테스트", () => {
  test("정상 값 입력 시 Pass", () => {
    const carNames = ["car1", "car2", "car3"];
    expect(() => isValidCarName(carNames).not.toThrow());
  });

  test("5자 초과일 경우 에러", () => {
    const carNames = ["car1", "car123456"];
    expect(() => isValidCarName(carNames)).toThrowError(
      "[ERROR] 5자 이하의 이름을 입력하세요."
    );
  });

  test("자동차 이름이 없을 경우 에러", () => {
    expect(() => isValidCarName([""])).toThrowError(
      "[ERROR] 2대 이상의 자동차를 입력하세요."
    );
  });

  test("중복된 자동차 이름이 있을 경우 에러", () => {
    const carNames = ["car1", "car1"];
    expect(() => isValidCarName(carNames)).toThrowError(
      "[ERROR] 서로 다른 이름의 이름을 입력하세요."
    );
  });
});
