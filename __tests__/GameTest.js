import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../src/Constant.js";
import Car from "../src/Car.js";

describe("Game 테스트", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("inputName 함수 테스트", async () => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockResolvedValue("car1,car2,car3");

    const app = new App();
    const carNames = await app.inputName();

    expect(carNames).toEqual(["car1", "car2", "car3"]);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      MESSAGE.inputName
    );
  });

  test("inputRaceRound 함수 테스트", async () => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockResolvedValue("5");

    const app = new App();
    const racingRound = await app.inputRaceRound();

    expect(racingRound).toEqual("5");
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      MESSAGE.inputRound
    );
  });

  test("getWinner 함수 테스트", async () => {
    MissionUtils.Console.print = jest.fn();

    const car1 = new Car("car1");
    const car2 = new Car("car2");

    car1.getMoveCount = jest.fn(() => 5);
    car2.getMoveCount = jest.fn(() => 7);

    const racingCars = [car1, car2];

    const app = new App();
    await app.getWinner(racingCars);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "최종 우승자 : car2"
    );
  });

  test("getWinner 함수 테스트 (우승자 2명이상)", async () => {
    MissionUtils.Console.print = jest.fn();

    const car1 = new Car("car1");
    const car2 = new Car("car2");
    const car3 = new Car("car3");

    car1.getMoveCount = jest.fn(() => 5);
    car2.getMoveCount = jest.fn(() => 7);
    car3.getMoveCount = jest.fn(() => 7);

    const racingCars = [car1, car2, car3];

    // 테스트 실행
    const app = new App();
    await app.getWinner(racingCars);

    // 기대값 확인
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "최종 우승자 : car2, car3"
    );
  });
});
