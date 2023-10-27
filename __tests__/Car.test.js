import Car from "../src/Car.js";

describe("자동차 테스트", () => {
  test.each([
    ["modi", "modi", 0],
    ["woo", "woo", 0],
  ])("인스턴스 생성 - %s", (input, expectedName, expectedPosition) => {
    const car = new Car(input);

    expect(car.name).toBe(expectedName);
    expect(car.position).toBe(expectedPosition);
  });
});
