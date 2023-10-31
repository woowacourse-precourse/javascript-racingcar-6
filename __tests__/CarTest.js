import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Car 클래스 테스트", () => {
  test("자동차 객체 생성", () => {
    const car = new Car("bong");
    const result = car.getName;
    expect(result).toEqual("bong");
  });
  test("자동차 전진", () => {
    const car = new Car("bong");

    car.goForward();

    const result = car.getForwardCount;
    expect(result).toEqual(1);
  });
  test("자동차의 전진 상태 출력", () => {
    const output = "bong : ---";
    const car = new Car("bong");
    const logSpy = getLogSpy();

    car.goForward();
    car.goForward();
    car.goForward();

    car.printState();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
  test("우승 여부 판별 - 우승", () => {
    const MaxCount = 3;
    const car = new Car("bong");

    car.goForward();
    car.goForward();
    car.goForward();

    const result = car.isWinner(MaxCount);
    expect(result).toBe(true);
  });
  test("우승 여부 판별 - 탈락", () => {
    const MaxCount = 3;
    const car = new Car("bong");

    car.goForward();

    const result = car.isWinner(MaxCount);
    expect(result).toBe(false);
  });
  test("자동차 중복 이름 검사 - 중복", () => {
    const newName = "bong";
    const car = new Car("bong");

    const result = car.isSameName(newName);
    expect(result).toBe(true);
  });
  test("자동차 중복 이름 검사 - 미중복", () => {
    const newName = "labong";
    const car = new Car("bong");

    const result = car.isSameName(newName);
    expect(result).toBe(false);
  });
});
