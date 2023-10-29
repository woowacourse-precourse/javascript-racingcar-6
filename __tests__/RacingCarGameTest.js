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
});
