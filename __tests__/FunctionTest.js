import Car from "../src/model/Car";
import Cars from "../src/model/Cars";

describe("함수 기능 테스트", () => {
  test("Car의 getName 메소드가 이름을 정상적으로 반환하는가", () => {
    const NAME = "우테코";
    const WRONG_NAME = "우테키";

    const car = new Car(NAME);

    expect(car.getName()).toBe(NAME);
    expect(car.getName()).not.toBe(WRONG_NAME);
  });
});
