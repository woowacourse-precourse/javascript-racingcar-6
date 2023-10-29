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
});
