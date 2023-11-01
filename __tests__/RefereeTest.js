import RacingCar from "../src/model/car/racingCar";
import Referee from "../src/model/game/referee";
import MovableNumber from "../src/model/movement/movableNumber";

jest.mock("../src/model/movement/movableNumber");

describe("Referee 클래스 테스트", () => {
  const referee = new Referee();
  MovableNumber.prototype.isMovable = jest.fn().mockReturnValue(true);

  test("determineWinners 메서드 테스트 - 우승자가 한명인 경우", () => {
    const car1 = new RacingCar("car1");
    const car2 = new RacingCar("car2");

    car1.move();

    const racingCars = [car1, car2];
    const winners = referee.determineWinners(racingCars);

    expect(winners).toEqual(["car1"]);
  });

  test("determineWinners 메서드 테스트 - 우승자가 여러명일 경우", () => {
    const car1 = new RacingCar("car1");
    const car2 = new RacingCar("car2");
    const car3 = new RacingCar("car3");

    car1.move();
    car2.move();
    car3.move();

    const racingCars = [car1, car2, car3];
    const winners = referee.determineWinners(racingCars);
    expect(winners).toEqual(["car1", "car2", "car3"]);
  });
});
