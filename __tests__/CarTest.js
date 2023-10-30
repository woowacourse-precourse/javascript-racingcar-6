import Car from "../src/RacingCar/Car";

test("차가 전진하면 distance가 증가", () => {
  const car = new Car("myCar");
  car.move();

  expect(car.distance).toBe("-");
  expect(car.distance.length).toBe(1);
});
