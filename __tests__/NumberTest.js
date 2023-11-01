import RaceNumber from "../src/RaceNumber.js";

describe("Number 클래스 테스트", () => {
  it("유효한 자연수인 경우 정상적으로 생성되는지 확인", () => {
    const validNumber = new RaceNumber("50");
    expect(validNumber.number).toBe(50);
  });

  it("0이 입력된 경우 에러를 발생시키는지 확인", () => {
    expect(() => new RaceNumber("0")).toThrow("[ERROR] 횟수는 1 이상 100 이하의 자연수여야 합니다.");
  });

  it("음수가 입력된 경우 에러를 발생시키는지 확인", () => {
    expect(() => new RaceNumber("-5")).toThrow("[ERROR] 횟수는 1 이상 100 이하의 자연수여야 합니다.");
  });

  it("100이 입력된 경우 정상적으로 생성되는지 확인", () => {
    const validNumber = new RaceNumber("100");
    expect(validNumber.number).toBe(100);
  });

  it("101이 입력된 경우 에러를 발생시키는지 확인", () => {
    expect(() => new RaceNumber("101")).toThrow("[ERROR] 횟수는 1 이상 100 이하의 자연수여야 합니다.");
  });

  it("유효한 자연수 문자열이 아닌 경우 에러를 발생시키는지 확인", () => {
    expect(() => new RaceNumber("abc")).toThrow("[ERROR] 횟수는 1 이상 100 이하의 자연수여야 합니다.");
  });
});