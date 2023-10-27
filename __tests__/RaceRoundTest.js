import RaceRound from "../src/Models/RaceRound.js";

describe("RaceRound 기능 테스트", () => {
  test("number로 형변환", () => {
    const input = "4";
    const result = new RaceRound(input).raceRound;
    expect(result).toEqual(4);
  });

  test("입력된 값이 숫자가 아닐 때 예외 처리", () => {
    const input = "다섯";
    expect(() => new RaceRound(input)).toThrow("[ERROR]");
  });
});
