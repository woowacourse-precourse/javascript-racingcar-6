import Race from "../src/Race";

describe("Race class의 decideWinners 메서드 테스트", () => {
  let race;

  beforeEach(() => {
    const arrCarName = ["pobi", "woni", "djun"];
    race = new Race(arrCarName);

    race.cars[0].distance = 5; // pobi
    race.cars[1].distance = 4; // woni
    race.cars[2].distance = 5; // jun
  });

  test("stateOfRace 메서드가 올바른 name과 distance를 반환", () => {
    const result = race.stateOfRace();
    expect(result).toEqual([
      { name: "pobi", distance: "-----" },
      { name: "woni", distance: "----" },
      { name: "djun", distance: "-----" },
    ]);
  });

  test("decideWinners 메서드가 올바른 우승자를 반환", () => {
    const winners = race.decideWinners();

    expect(winners.length).toBe(2);
    expect(winners).toContain("pobi");
    expect(winners).toContain("djun");
    expect(winners).not.toContain("woni");
    expect(winners.join(", ")).toBe("pobi, djun")
  });
});
