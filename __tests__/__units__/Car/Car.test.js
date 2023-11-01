import { Car } from "../../../src/domain";

describe("Car 테스트", () => {
  it("getter car name  테스트", () => {
    const carName = "MyCar";
    const car = new Car(carName);
    expect(car.name).toBe(carName);
  });

  it("getter horizontalOffset 테스트", () => {
    const car = new Car("MyCar");
    expect(car.horizontalOffset).toBe(0);
  });

  it("method run 테스트", () => {
    const car = new Car("MyCar");
    car.run();
    expect(car.horizontalOffset).toBe(1);
  });
});
