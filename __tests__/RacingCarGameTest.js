import { Console } from "@woowacourse/mission-utils";
import RacingCarGame from "../src/Controllers/RacingCarGame.js";
import Car from "../src/Models/Car.js";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("RacingCarGame 기능 테스트", () => {
  test("경주할 자동차 이름 값을 입력 받아서 각각 Car 인스턴스 생성", async () => {
    // given
    const inputs = ["car1,car2,car3"];

    mockQuestions(inputs);

    // when
    const racingCarGame = new RacingCarGame();
    await racingCarGame.setupCars();

    // then
    expect(racingCarGame.cars.length).toBe(3);
    racingCarGame.cars.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });
  });

  test("executeRace 메서드는 모든 자동차에 대해 race 메서드를 호출해야 함", () => {
    // given
    const inputs = ["jenn", "terry", "erric"];
    const cars = Array.from(inputs, (name) => new Car(name));
    const spies = Array.from(cars, (car) => jest.spyOn(car, "race"));

    // when
    const racingCarGame = new RacingCarGame();
    racingCarGame.cars = cars;
    racingCarGame.executeRace();

    //then
    spies.forEach((spy) => {
      expect(spy).toHaveBeenCalled();
    });

    spies.forEach((spy) => spy.mockRestore());
  });

  test("최종 우승자 구하기 - 우승자가 1명일 때", () => {
    // given
    const nameInputs = ["jenn", "terry", "erric"];
    const statusInputs = [
      {
        name: "jenn",
        totalDistance: 1,
      },
      {
        name: "terry",
        totalDistance: 2,
      },
      {
        name: "erric",
        totalDistance: 3,
      },
    ];

    // when
    const game = new RacingCarGame();
    game.cars = Array.from(nameInputs, (name) => new Car(name));
    game.cars.map((car, index) => {
      car.getStatus = jest.fn(() => statusInputs[index]);
    });

    // then
    expect(game.getWinner()).toBe("erric");
  });

  test("최종 우승자 구하기 - 우승자가 2명일 때", () => {
    // given
    const nameInputs = ["jenn", "terry", "erric"];
    const statusInputs = [
      {
        name: "jenn",
        totalDistance: 2,
      },
      {
        name: "terry",
        totalDistance: 4,
      },
      {
        name: "erric",
        totalDistance: 4,
      },
    ];

    // when
    const game = new RacingCarGame();
    game.cars = Array.from(nameInputs, (name) => new Car(name));
    game.cars.map((car, index) => {
      car.getStatus = jest.fn(() => statusInputs[index]);
    });

    // then
    expect(game.getWinner()).toBe("terry, erric");
  });

  test("최종 우승자 구하기 - 모든 자동차의 총이동거리가 같을 때", () => {
    // given
    const nameInputs = ["jenn", "terry", "erric"];
    const statusInputs = [
      {
        name: "jenn",
        totalDistance: 3,
      },
      {
        name: "terry",
        totalDistance: 3,
      },
      {
        name: "erric",
        totalDistance: 3,
      },
    ];

    // when
    const game = new RacingCarGame();
    game.cars = Array.from(nameInputs, (name) => new Car(name));
    game.cars.map((car, index) => {
      car.getStatus = jest.fn(() => statusInputs[index]);
    });

    // then
    expect(game.getWinner()).toBe("jenn, terry, erric");
  });
});
