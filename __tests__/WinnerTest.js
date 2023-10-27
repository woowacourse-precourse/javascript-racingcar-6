import Race from "../src/Race";

describe("Race class의 getWinners 메서드 테스트", () => {
  let race;

  beforeEach(() => {
    const arrCarName = ["pobi", "woni", "jun"];
    race = new Race(arrCarName);

    // 각 차의 거리를 수동으로 설정
    race.cars[0].distance = 5; // pobi
    race.cars[1].distance = 4; // woni
    race.cars[2].distance = 5; // jun
  });

  test("decideWinners 메서드가 올바른 우승자를 반환", () => {
    const winners = race.decideWinners();

    expect(winners.length).toBe(2);
    expect(winners).toContain("pobi");
    expect(winners).toContain("jun");
    expect(winners).not.toContain("woni");
  });
});
