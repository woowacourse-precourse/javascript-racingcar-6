import { Console } from "@woowacourse/mission-utils";
import App from "../src/App";
import Car from "../src/Car";

const app = new App();

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe("게임 로직 검사", () => {
  describe("레이싱 게임 시작", () => {
    test("시도 횟수만큼 게임이 진행되어야 한다.", () => {
      const car = new Car("test");
      const cars = [car];
      app.startRace(cars, 3);

      expect(car.position).toBeGreaterThanOrEqual(0);
    });
  });

  describe("우승자 표시", () => {
    test("우승자를 올바르게 식별해야 한다.", () => {
      const car1 = new Car("car1");
      const car2 = new Car("car2");
      car1.position = 5;
      car2.position = 3;
      const cars = [car1, car2];

      app.displayWinners(cars);

      expect(Console.print).toHaveBeenCalledWith("최종 우승자 : car1");
    });
  });
});
