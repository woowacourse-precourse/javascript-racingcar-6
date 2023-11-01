jest.mock("../src/car", () => ({
  carGenerate: jest.fn().mockResolvedValue(["car1", "car2"]),
}));

const mockReadLineAsync = jest.fn();
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: mockReadLineAsync,
  },
}));

const { generateCars } = require("../src/racingGame");
const { carGenerate } = require("../src/car");

describe("자동차 경주 게임", () => {
  test("자동차 생성시 이름, 거리 반환", async () => {
    const carList = await generateCars();
    expect(carList).toEqual([
      { carName: "car1", carDistance: "" },
      { carName: "car2", carDistance: "" },
    ]);
  });

  test("split 메서드로 주어진 값을 구분", async () => {
    const input = "pobi,woni";
    mockReadLineAsync.mockResolvedValue(input);
    carGenerate.mockResolvedValueOnce(["pobi", "woni"]);

    const result = await carGenerate();

    expect(result).toContain("pobi", "woni");
    expect(result).toContainEqual("woni", "pobi");
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", async () => {
    const input = "1";
    mockReadLineAsync.mockResolvedValue(input);
    carGenerate.mockResolvedValueOnce(["1"]);

    const result = await carGenerate();

    expect(result).toContainEqual("1");
  });

  test("at 메서드로 특정 위치의 문자 찾기", () => {
    const input = "abc";
    mockReadLineAsync.mockResolvedValue(input);
    const result = input.at(0);

    expect(result).toEqual("a");
  });

  test("substring 메서드로 특정 구간 값을 반환", () => {
    const input = "(1,2)";
    const result = input.substring(1, 4);

    expect(result).toEqual("1,2");
  });
});
