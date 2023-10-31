import App from "../src/App";

test("우승자 다수일 때 테스트", () => {
  const app = new App();

  app.carNames = [
    { name: "Car1", score: 2 },
    { name: "Car2", score: 4 },
    { name: "Car3", score: 4 },
  ];

  const message = app.printWinner();

  expect(message).toBe("최송 우승자 : Car2, Car3");
});

test("우승자 1명일 때 테스트", () => {
  const app = new App();

  app.carNames = [
    { name: "Car1", score: 2 },
    { name: "Car2", score: 5 },
    { name: "Car3", score: 4 },
  ];

  const message = app.printWinner();

  expect(message).toBe("최송 우승자 : Car2");
});
