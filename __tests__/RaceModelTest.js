import Race from "../src/models/race.js";

describe("Race Model 테스트", () => {
  test("총 라운드 설정", () => {
    // given
    const rounds = [1, 2, 3, 4];
    const results = [1, 2, 3, 4]

    // when
    const race = new Race();

    // then
    rounds.forEach((round, index) => {
      race.setTotalRound(round);
      const result = results[index];

      expect(race.getTotalRound()).toBe(result);
    });
  });

  test("다음 라운드 이동", () => {
    // given
    const totalRound = 3;
    const results = [2, 3, 3, 3];

    // when
    const race = new Race();
    race.setTotalRound(totalRound);

    // then
    results.forEach((result) => {
      race.goNextRound();
      expect(race.getCurrentRound()).toBe(result);
    });
  });
});