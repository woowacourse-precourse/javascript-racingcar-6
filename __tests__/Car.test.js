import { Car } from "../src/Car.js";

describe("Car 단위 테스트", () => {
  test("생성자로 이름을 등록할 수 있다.", () => {
    const NAME = "pobi";
    const car = new Car(NAME);

    const score = car.score();
    expect(score.name).toEqual(NAME);
  });
  
  test("앞으로 이동할 수 있다.", () => {
    const MOVE_COUNT = 5;
    const car = new Car("pobi");

    for (let i = 0; i < MOVE_COUNT; i++) {
      car.moveForward();
    }

    const score = car.score();
    expect(score.moves).toEqual(MOVE_COUNT);
  });
});
