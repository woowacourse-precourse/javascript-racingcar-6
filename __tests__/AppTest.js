import App, { ERROR_MESSAGE } from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

describe("App", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe("getCars", () => {
    if (
      ("input이 비어있을 때",
      async () => {
        await expect(app.getCars.bind(app)).rejects.toThrow(
          ERROR_MESSAGE.EMPTY
        );
      })
    );

    if (
      ("자동차 이름이 5글자 이상일 때",
      async () => {
        const input = "car1234,LongCarName";
        await expect(app.getCars.bind(app, input)).rejects.toThrow(
          ERROR_MESSAGE.LENGTH
        );
      })
    );

    if (
      ("자동차 이름을 제대로 입력했을 때",
      async () => {
        const input = "Car1,Car2,Car3";
        await app.getCars(input);
        expect(app.cars).toHaveLength(3);
      })
    );
  });

  describe("getChances", () => {
    if (
      ("숫자가 아닐 때",
      async () => {
        const originalReadLineAsync = Console.readLineAsync;
        Console.readLineAsync = jest.fn(() => Promise.resolve("notanumber"));
        await expect(app.getChances.bind(app)).rejects.toThrow(
          ERROR_MESSAGE.NUMBER
        );
        Console.readLineAsync = originalReadLineAsync;
      })
    );

    it("숫자를 제대로 입력했을 때", async () => {
      const originalReadLineAsync = Console.readLineAsync;
      Console.readLineAsync = jest.fn(() => Promise.resolve("5"));
      await app.getChances();
      Console.readLineAsync = originalReadLineAsync;
      expect(app.chances).toBe(5);
    });
  });

  describe("getResult", () => {
    if (
      ("결과를 출력할 때",
      () => {
        app.cars = [new Car("car1"), new Car("car2")];
        app.cars[0].position = 3;
        app.cars[1].position = 2;
        const consoleSpy = jest.spyOn(console, "log");
        app.getResult();
        expect(consoleSpy).toHaveBeenCalledWith("car1 : ---");
        expect(consoleSpy).toHaveBeenCalledWith("car2: --");
      })
    );

    if (
      ("우승자가 한 명일 때",
      () => {
        app.cars = [new Car("car1"), new Car("car2")];
        app.cars[0].position = 3;
        app.cars[1].position = 2;
        const consoleSpy = jest.spyOn(console, "log");
        app.getResult();
        expect(consoleSpy).toHaveBeenCalledWith("최종 우승자: car1");
      })
    );

    if (
      ("우승자가 두 명일 때",
      () => {
        app.cars = [new Car("car1"), new Car("car2")];
        app.cars[0].position = 3;
        app.cars[1].position = 3;
        const consoleSpy = jest.spyOn(console, "log");
        app.getResult();
        expect(consoleSpy).toHaveBeenCalledWith("최종 우승자: car1. car2");
      })
    );
  });
});
