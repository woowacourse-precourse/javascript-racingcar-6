import Computer from "../src/Computer";

describe("최종결과 테스트", () => {
  test("단독우승자 찾기", () => {
    const input = [
      { name: "pobi", position: 3 },
      { name: "drk", position: 2 },
      { name: "hw", position: 1 },
    ];
    const expected = "pobi";
    const result = Computer.makeWinnerString(Computer.findWinner(input));
    expect(result).toBe(expected);
  });

  test("공동우승자 찾기", () => {
    const input = [
      { name: "pobi", position: 2 },
      { name: "drk", position: 2 },
      { name: "hw", position: 1 },
    ];
    const expected = "pobi, drk";
    const result = Computer.makeWinnerString(Computer.findWinner(input));
    expect(result).toBe(expected);
  });
});
