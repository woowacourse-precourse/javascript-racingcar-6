jest.mock("../src/car", () => ({
  carGenerate: jest.fn().mockResolvedValue(["car1", "car2"]),
}));

const { generateCars } = require("../src/racingGame");

describe("자동차 경주 게임", () => {
  test("자동차 생성시 이름, 거리 반환", async () => {
    const carList = await generateCars();
    expect(carList).toEqual([
      { carName: "car1", carDistance: "" },
      { carName: "car2", carDistance: "" },
    ]);
  });
});
