import { Console, Random } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Car from "../src/Car.js";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test.each([[["first,"]], [["first,second"]]])(
    "자동차 이름 길이 테스트",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );

  test("자동차 이름 중복 테스트", async () => {
    mockQuestions(["one,two,two"]);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("이동 횟수 타입 테스트", async () => {
    mockQuestions(["one,two,three", "invalidType"]);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("이동 횟수 범위 테스트", async () => {
    mockQuestions(["one,two,three", "-1"]);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("이동 테스트", () => {
    const randoms = [0, 4, 9, 3, 5];
    const results = [0, 1, 2, 2, 3];
    mockRandoms([...randoms]);

    const car = new Car("testCar");

    results.forEach((result) => {
      car.move();
      expect(car.countMove).toBe(result);
    });
  });

  test("우승자 테스트", () => {
    const inputCars = [
      ["one", 1],
      ["two", 2],
      ["three", 2],
    ];
    const mockCars = [];
    const result = "two, three";
    const logSpy = getLogSpy();

    const app = new App();
    inputCars.forEach((carInfo) => {
      const car = new Car(carInfo[0]);
      car.countMove = carInfo[1];
      mockCars.push(car);
    });

    app.cars = mockCars;
    app.printWinner();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
  });

  test("통합 게임 테스트", async () => {
    const inputCars = "one,two,three";
    const inputRound = "3";
    const randoms = [4, 4, 4, 4, 4, 4, 4, 4, 3];
    const results = [
      "one : -",
      "two : -",
      "three : -",
      "one : --",
      "two : --",
      "three : --",
      "one : ---",
      "two : ---",
      "three : --",
      "one, two",
    ];
    const logSpy = getLogSpy();

    mockQuestions([inputCars, inputRound]);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    results.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });
});
