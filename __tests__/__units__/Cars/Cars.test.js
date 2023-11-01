import { Cars } from "../../../src/domain";

describe("Cars 테스트", () => {
  it("getter cars 테스트", () => {
    const carNames = ["pobi,woni"];

    const cars = new Cars(carNames);

    expect(cars).toBeInstanceOf(Cars);
  });

  it("getter carNames 테스트", () => {
    const carNames = ["pobi", "woni"];

    const cars = new Cars(carNames);

    expect(cars.getCarNames()).toEqual(carNames);
  });

  it("getter carOffsets 테스트", () => {
    const carNames = ["pobi", "woni"];

    const cars = new Cars(carNames);

    expect(cars.getCarOffsets()).toEqual([0, 0]);
  });
});
