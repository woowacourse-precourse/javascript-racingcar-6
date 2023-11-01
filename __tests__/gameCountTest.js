import checkGameCount from "../src/checkGameCount";

describe("checkRaceCount", () => {
  test("숫자가 맞는가?", () => {
    const raceCount = "a";
    expect(checkGameCount(raceCount)).toBeFalsy();
  });

  test("숫자이지만 0인가?", () => {
    const raceCount = 0;
    expect(checkGameCount(raceCount)).toBeFalsy();
  });
});
