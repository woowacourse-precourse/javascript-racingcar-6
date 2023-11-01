import app from "../src/App"; // 이 경로를 알맞게 수정해야 할 수 있습니다.
import { MissionUtils } from "@woowacourse/mission-utils";

describe("App 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  it("validateCarNames 메서드 테스트", () => {
    // 어진 자동차 이름 배열이 유효한지 확인하며, 유효하지 않은 경우 예외를 발생시킨다.
    expect(() => app.validateCarNames(["", "abcdef"])).toThrowError(
      "[ERROR] 자동차 이름은 1자 이상 5자 이하이어야 합니다."
    );
    expect(() => app.validateCarNames(["car1", "car2", "car3"])).not.toThrow();
  });

  it("moveCars 메서드 테스트", () => {
    // 각 자동차를 무작위로 이동시키고 해당 메서드가 올바르게 동작하는지 확인한다.
    app.cars = [
      { name: "car1", move: jest.fn() },
      { name: "car2", move: jest.fn() },
      { name: "car3", move: jest.fn() },
    ];

    // pickNumberInRangeMock과 move 메서드를 가로채서 모의(mock) 함수로 대체한다.
    const pickNumberInRangeMock = jest
      .spyOn(MissionUtils.Random, "pickNumberInRange")
      .mockReturnValue(4);

    app.moveCars();

    expect(pickNumberInRangeMock).toHaveBeenCalledTimes(app.cars.length);
    app.cars.forEach((car) => {
      expect(car.move).toHaveBeenCalledWith(4);
    });
  });

  it("moveCarsResult 메서드 테스트", () => {
    // 각 자동차의 이동 결과를 올바르게 출력하는지 확인한다.
    app.cars = [
      { name: "car1", getDistance: jest.fn().mockReturnValue("---") },
      { name: "car2", getDistance: jest.fn().mockReturnValue("----") },
      { name: "car3", getDistance: jest.fn().mockReturnValue("") },
    ];
    const printMock = jest
      .spyOn(MissionUtils.Console, "print")
      .mockImplementation(() => {});

    app.moveCarsResult();

    expect(printMock).toHaveBeenCalledWith("car1 : ---");
    expect(printMock).toHaveBeenCalledWith("car2 : ----");
    expect(printMock).not.toHaveBeenCalledWith("car3 : ");
  });

  it("getWinners 메서드 테스트", () => {
    // 가장 멀리 이동한 자동차(들)을 반환한다.
    app.cars = [
      { name: "car1", distance: 2 },
      { name: "car2", distance: 4 },
      { name: "car3", distance: 4 },
    ];
  });

  const winners = app.getWinners();

  expect(winners).toEqual(["car2", "car3"]);
});

it("winner 메서드 테스트", () => {
  // getWinners 메서드를 가로채서 모의 함수로 대체하고, winner 메서드가 우승자를 올바르게 출력하는지 확인한다.
  app.getWinners = jest.fn().mockReturnValue(["car2", "car3"]);
  const printMock = jest
    .spyOn(MissionUtils.Console, "print")
    .mockImplementation(() => {});

  app.winner();

  expect(printMock).toHaveBeenCalledWith("최종 우승자 : car2,car3");
});

describe("Car 테스트", () => {
  // 자동차의 이동 및 이동 결과를 확인
  it("move 메서드 테스트", () => {
    const car = new Car("car1");
    car.move(3);
    expect(car.distance).toBe(0);
    car.move(4);
    expect(car.distance).toBe(1);
    car.move(6);
    expect(car.distance).toBe(2);
  });

  it("getDistance 메서드 테스트", () => {
    const car = new Car("car1");
    car.move(4);
    expect(car.getDistance()).toBe("-");
    car.move(6);
    expect(car.getDistance()).toBe("--");
    car.move(3);
    expect(car.getDistance()).toBe("---");
  });
});
