import ShowGameResult from "../src/utils/ShowGameResult";

describe("게임 결과", () => {
  let showGameResult;

  beforeEach(() => {
    const carPositions = {
      benz: "--",
      mini: "---",
      tayo: "-",
    };
    showGameResult = new ShowGameResult(carPositions);
  });

  test("우승자 찾기", () => {
    const winners = showGameResult.findWinner();
    expect(winners).toEqual(["mini"]);
  });
});
