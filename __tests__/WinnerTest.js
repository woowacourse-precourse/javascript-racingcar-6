import App from "../src/App.js";

describe("우승자 판별 및 출력 테스트", () => {
  test("position이 가장 큰 car를 출력하는지 테스트", async () => {
    const CARS = [
      { name: "sudol", position: 1 },
      { name: "hello", position: 2 },
      { name: "hi", position: 3 },
    ];

    const app = new App();

    const WINNER_PRINT = console.log;
    console.log = jest.fn();

    await app.announceTheWinner(CARS);

    expect(console.log).toHaveBeenCalledWith("최종 우승자 : hi");

    console.log = WINNER_PRINT;
  });

  test("우승자가 여러 명인 경우 테스트", async () => {
    const CARS = [
      { name: "sudol", position: 3 },
      { name: "hello", position: 2 },
      { name: "hi", position: 3 },
    ];

    const app = new App();

    const WINNER_PRINT = console.log;
    console.log = jest.fn();

    await app.announceTheWinner(CARS);

    expect(console.log).toHaveBeenCalledWith("최종 우승자 : sudol, hi");

    console.log = WINNER_PRINT;
  });
});
