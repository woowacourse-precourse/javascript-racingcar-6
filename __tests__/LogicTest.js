import App from "../src/App.js";

describe("로직 테스트", () => {
  test("자동차 입력 테스트", () => {
    const app = new App();
    const result = "dong,wan";
    app.inputCarNames = result;
    expect(app.inputCarNames).toContain("dong", "wan");
  });

  test("우승자 출력 테스트", () => {
    const app = new App();
    const carsArr = [
      { name: "dong", position: 2 },
      { name: "wan", position: 1 },
    ];
    const result = app.findWinners(carsArr);
    expect(result).toContain("dong");
  });

  test("두 명 이상이 우승자일 경우 출력 테스트", () => {
    const app = new App();
    const carsArr = [
      { name: "dong", position: 2 },
      { name: "wan", position: 2 },
    ];
    const result = app.findWinners(carsArr);
    expect(result).toContain("dong", "wan");
  });
});
