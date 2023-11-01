import App from "../src/App";

describe("우승자 구하기", () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  test("단일 우승자", () => {
    app.cars = {
      fobi: 3,
      woni: 2,
      jun: 1,
    };

    expect(() => app.getWinner()).not.toBe("최종 우승자 : fobi");
  });

  test("여러명일 경우", () => {
    app.cars = {
      fobi: 3,
      woni: 3,
      jun: 3,
    };

    expect(() => app.getWinner()).not.toBe("최종 우승자 : fobi, woni, jun");
  });
});
