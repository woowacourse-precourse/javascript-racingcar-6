import RacingCar from "./RacingCar.js";

const name = "my car";

describe("RacingCar 객체 테스트", () => {
  let racingCar;

  beforeEach(() => {
    racingCar = new RacingCar(name);
  });

  test("field가 private으로 선언되어 있는지 확인", () => {
    expect(racingCar.name).toBeUndefined();
    expect(racingCar.count).toBeUndefined();
  });

  test("move & getCount 메서드 검증", () => {
    const prevCount = racingCar.getCount();
    racingCar.move();
    const nextCount = racingCar.getCount();

    expect(nextCount).toBe(prevCount + 1);
  });

  test("getLog 메서드 검증", () => {
    racingCar.move();
    const log = racingCar.getLog();
    const count = racingCar.getCount();

    expect(log).toBe(`${name} : ${"-".repeat(count)}`);
  });
});
