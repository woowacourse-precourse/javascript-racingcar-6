import Car from "../src/Car";
import RacingGame from "../src/RacingGame";

describe("RacingGame 클래스", () => {
  test("자동차 이름 및 라운드 수 받아서 인스턴스 생성", () => {
    const racingGame = new RacingGame(["car1", "car2"], 5);
    expect(racingGame.cars[0]).toBeInstanceOf(Car);
    expect(racingGame.cars[0].name).toBe("car1");
    expect(racingGame.cars[1].name).toBe("car2");
    expect(racingGame.rounds).toBe(5);
  });
});
