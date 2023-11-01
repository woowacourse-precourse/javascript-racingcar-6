import User from "../src/User.js";

describe("자동차 이름 테스트", () => {
  test("빈 문자열에 대한 예외 처리", () => {
    const input = "";
    const result = () => User.validateCarName(input);
    expect(result).toThrow("[ERROR] 입력 값이 없습니다.");
  });

  test(",로 시작하는 이름에 대한 예외 처리", () => {
    const input = ",pobi,drk";
    const result = () => User.validateCarName(input);
    expect(result).toThrow(
      "[ERROR] 입력 값이 쉼표로 시작하거나 끝날 수 없습니다.",
    );
  });

  test(",로 끝나는 이름에 대한 예외 처리", () => {
    const input = "pobi,drk,";
    const result = () => User.validateCarName(input);
    expect(result).toThrow(
      "[ERROR] 입력 값이 쉼표로 시작하거나 끝날 수 없습니다.",
    );
  });

  test("1개만 입력받은 이름에 대한 예외 처리", () => {
    const input = "pobi";
    const result = () => User.validateCarName(input);
    expect(result).toThrow("[ERROR] 최소 2개의 자동차 이름을 입력해주십시오.");
  });

  test("5자 초과 이름에 대한 예외 처리", () => {
    const input = "Rodriguez,pobi";
    const result = () => User.validateCarName(input);
    expect(result).toThrow(`[ERROR] 각 자동차의 이름은 5자 이하이어야 합니다.`);
  });

  test("중복된 이름에 대한 예외 처리", () => {
    const input = "pobi,pobi";
    const result = () => User.validateCarName(input);
    expect(result).toThrow(
      `[ERROR] 같은 이름이 존재합니다. 각 자동차의 이름은 모두 달라야 합니다.`,
    );
  });
});
