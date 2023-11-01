import Car from "../../src/Model/Car.js";
import { Random } from "@woowacourse/mission-utils";

Random.pickNumberInRange = jest.fn();
let car;
describe("Car 클래스 테스트", () => {
  beforeEach(() => {
    car = new Car("junwoo");
  });
  test("Car 인스턴스를 생성할 수 있어야 한다.", () => {
    expect(car).toBeDefined();
  });

  test("move 메서드를 가지고 있어야 한다.", () => {
    expect(typeof car.move).toBe("function");
  });

  test("Random.pickNumberInRange가 4보다 큰 수를 반환하면 위치가 증가해야 한다.", () => {
    Random.pickNumberInRange.mockReturnValue(4);
    expect(car.move()).toStrictEqual({ position: 1, name: "junwoo" });
  });

  test("Random.pickNumberInRange가 4보다 작은 수를 반환하면 위치가 감소해야 한다.", () => {
    Random.pickNumberInRange.mockReturnValue(3);
    expect(car.move()).toStrictEqual({ position: 0, name: "junwoo" });
  });
});
