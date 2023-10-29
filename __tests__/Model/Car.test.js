import Car from "../../src/Model/Car";

describe("Car 클래스 테스트", () => {
  test("Car 인스턴스를 생성할 수 있어야 한다.", () => {
    const car = new Car("junwoo");
    expect(car).toBeDefined();
  });
});
