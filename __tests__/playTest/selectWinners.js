import App from "../../src/App";

const app = new App();
const mockCars = new Map();

beforeAll(() => {
  // given
  mockCars.set("pobi", "---");
  mockCars.set("woni", "-");
  app.cars = mockCars;
});

describe("우승자 선정", () => {
  test("가장 멀리 간 레이싱카의 거리 계산", () => {
    // when
    const longestDistance = app.getLongestDistance();

    // then
    expect(longestDistance).toStrictEqual(3);
  });

  test("공동 우승자 선정", () => {
    // given
    mockCars.set("wonil", "---");

    // when
    app.selectWinners();

    // then
    expect(app.winners).toStrictEqual(["pobi", "wonil"]);
  });
});
