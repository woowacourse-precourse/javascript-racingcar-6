import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Car from "../src/Car.js";
import CarRacingGame from "../src/CarRacingGame.js";
import Validation from "../src/Validation.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );

  test("전진 시도(Car.moveForward)테스트", () => {
    const randoms = [0, 4, 9, 3, 5];
    const results = [0, 1, 2, 2, 3];
    mockRandoms([...randoms]);

    const car = new Car("test");
    results.forEach((result) => {
      car.moveForward();
      expect(car.getDistance()).toBe(result);
    });
  });

  test("자동차 이름 검증 (Validation.validationCarName)테스트", () => {
    const passInput = ["hi", "bye", "next"];
    const failInput = ["", "WelcomeToMyTest"];

    passInput.forEach((input) => {
      expect(() => Validation.validationCarName(input)).not.toThrow();
    });
    failInput.forEach((input) => {
      expect(() => Validation.validationCarName(input)).toThrow("[ERROR]");
    });
  });

  test("경주 자동차 이름 중복 여부 검증(Validation.validationDuplicateCarName)테스트", () => {
    const passInput = ["hi", "bye", "next"];
    const failInput = ["hi", "hi", "bye"];

    expect(() =>
      Validation.validationDuplicateCarName(passInput).not.toThrow()
    );
    expect(() =>
      Validation.validationDuplicateCarName(failInput).toThrow("[ERROR]")
    );
  });

  test("이동 횟수 검증 (Validation.validationCount)테스트", () => {
    const passInput = ["1", "123", "9999"];
    const failInput = ["0", "-1", "hi", "1.234"];
    passInput.forEach((input) => {
      expect(() => Validation.validationCount(input).not.toThrow());
    });
    failInput.forEach((input) => {
      expect(() => Validation.validationCount(input).toThrow("[ERROR]"));
    });
  });

  test("최종 우승자 (CarRacingGame.getWinner)테스트", () => {
    const randoms = [9, 9, 9, 9, 0, 9, 9, 9, 9];
    const cars = ["one", "two", "three"];
    mockRandoms([...randoms]);

    const carRacingGame = new CarRacingGame();
    carRacingGame.setCars(cars.map((car) => new Car(car)));
    carRacingGame.moveForward(3, () => {});
    expect(carRacingGame.getWinner()).toEqual(["one", "three"]);
  });

  test("전진 후 결과 콜백(CarRacingGame.moveForward)테스트", () => {
    const randoms = [9, 9, 9, 9, 0, 9, 9, 9, 9];
    const cars = ["one", "two", "three"];
    const distance = [1, 1, 1, 2, 1, 2, 3, 2, 3];
    mockRandoms([...randoms]);

    const carRacingGame = new CarRacingGame();
    carRacingGame.setCars(cars.map((car) => new Car(car)));
    carRacingGame.moveForward(3, (res) =>
      expect(res).toEqual(
        cars.map((name) => ({
          distance: distance.shift(),
          name,
        }))
      )
    );
  });
});
