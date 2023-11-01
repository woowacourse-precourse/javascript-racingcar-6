import Race from "../src/models/Race";

describe("Race 테스트", () => {
  test("Race 인스턴스 생성", () => {
    const race = new Race(["test1", "test2"]);
    expect(race.cars.length).toBe(2);
  });

  test("Race start 메서드 테스트", () => {
    const race = new Race(["test1", "test2"]);
    race.start(5);
    expect(race.cars[0].position).toBeGreaterThanOrEqual(0);
    expect(race.cars[1].position).toBeGreaterThanOrEqual(0);
  });

  test("Race getWinners 메서드 테스트", () => {
    const race = new Race(["test1", "test2"]);
    race.start(5);
    expect(race.getWinners().length).toBeGreaterThanOrEqual(1);
  });
});
