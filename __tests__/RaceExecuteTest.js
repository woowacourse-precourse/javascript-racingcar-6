import { Console } from "@woowacourse/mission-utils";
import Car from "../src/Car.js";
import App from "../src/App.js";

describe("경주 실행 테스트", () => {
  // 무작위 값 구하기 기능 테스트
  test("무작위 값 구하기 기능", () => {
    const result = Car.generateRandomValue();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(9);
  });

  // 자동차 위치 계산하기 기능 테스트
  test("자동차 위치 계산하기 기능", () => {
    const randomValues = [0, 3, 4, 5];
    const calculatedPositions = [0, 0, 1, 1];
    const result = [];

    for (const randomValue of randomValues) {
      const car = new Car();
      Car.generateRandomValue = jest.fn().mockReturnValue(randomValue);
      car.calculatePosition();
      result.push(car.position);
    }
    expect(result).toEqual(calculatedPositions);
  });

  // 실행 결과 출력하기 기능 테스트
  test("실행 결과 출력하기 기능", () => {
    const carList = [new Car("a"), new Car("b"), new Car("c")];
    const randomValuesList = [
      [1, 3, 5],
      [2, 4, 6],
    ];
    const resultMessage = [
      ["a : ", "b : ", "c : -"],
      ["a : ", "b : -", "c : --"],
    ];
    const spyFn = jest.spyOn(Console, "print");

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        const randomValue = randomValuesList[i][j];
        Car.generateRandomValue = jest.fn().mockReturnValue(randomValue);
        carList[j].calculatePosition();
        App.printResultMessage(carList[j]);
        expect(spyFn).toHaveBeenCalledWith(resultMessage[i][j]);
      }
    }
  });
});
