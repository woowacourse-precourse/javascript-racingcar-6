import CarNameValidator from "../src/validate/CarNameValidator.js";

describe("CarNameValidator 테스트", () => {
  test("정상적인 자동차 이름", () => {
    const input = "pobi,woni,jun";
    expect(() => CarNameValidator.validateNames(input)).not.toThrow();
  });

  test("자동차 이름이 빈 문자열일 경우", () => {
    const input = "";
    expect(() => CarNameValidator.validateNames(input)).toThrow("[ERROR] 입력한 값이 존재하지 않습니다.");
  });

  test("자동차 이름에 공백이 포함된 경우", () => {
    const input = "pobi, woni, jun";
    expect(() => CarNameValidator.validateNames(input)).toThrow("[ERROR] 입력한 값에 공백이 존재합니다.");
  });

  test("자동차 이름이 5글자를 초과하는 경우", () => {
    const input = "pobipobi,woniwoni,junjun";
    expect(() => CarNameValidator.validateNames(input)).toThrow("[ERROR] 자동차의 이름은 5글자 이하만 가능합니다.");
  });

  test("중복된 자동차 이름이 있는 경우", () => {
    const input = "pobi,pobi,pobi";
    expect(() => CarNameValidator.validateNames(input)).toThrow("[ERROR] 중복된 자동차의 이름이 존재합니다.");
  });
});