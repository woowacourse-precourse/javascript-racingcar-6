import Name from "../../src/Models/Name.js";

describe("Name 기능 테스트", () => {
  test("공백 없는 이름 길이 검증", () => {
    const input = "최가나";
    const result = new Name(input).name;
    expect(result).toEqual("최가나");
  });
  test("공백 제거 후 이름 길이 검증", () => {
    const input = " 최가나다라";
    const result = new Name(input).name;
    expect(result).toEqual("최가나다라");
  });

  test("길이가 5자 초과하는 이름 예외 처리", () => {
    const input = "최가나다라마";
    expect(() => new Name(input)).toThrow("[ERROR]");
  });

  test("공백인 이름 예외 처리", () => {
    const input = "";
    expect(() => new Name(input)).toThrow("[ERROR]");
  });
});
