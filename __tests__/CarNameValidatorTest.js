import Names from "../src/model/car/carNames";

const carNames = new Names();

describe("CarNameValidator 테스트", () => {
  test("정상적인 자동차 이름이 입력된 경우", () => {
    const input = "isy,yunji,y";
    expect(() => carNames.createValidNameList(input)).not.toThrow();
  });

  test("자동차 이름이 없을경우", () => {
    const input = "";
    expect(() => carNames.createValidNameList(input)).toThrow(
      "[ERROR] 이름을 입력해 주세요."
    );
  });

  test("자동차 이름이 5글자를 초과하는 경우", () => {
    const input = "sdf,sdfsdf";
    expect(() => carNames.createValidNameList(input)).toThrow(
      "[ERROR] 5글자 이하의 이름을 입력해주세요."
    );
  });

  test("중복된 자동차 이름이 있는 경우", () => {
    const input = "sdf,sdf,sd";
    expect(() => carNames.createValidNameList(input)).toThrow(
      "[ERROR] 중복된 이름이 있습니다."
    );
  });

  test("공백인 자동차 이름이 있는 경우", () => {
    const input = " ,sdf";
    expect(() => carNames.createValidNameList(input)).toThrow(
      "[ERROR] 이름은 공백이 될 수 없습니다."
    );
  });
});
