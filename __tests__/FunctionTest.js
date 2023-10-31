import { Console } from "@woowacourse/mission-utils";
import Game from "../src/Game.js";
import Car from "../src/Car.js";

describe("기능 테스트", () => {
  // 자동차 이름 입력받기 기능 테스트
  test("자동차 이름 입력받기", async () => {
    const input = "pobi,woni,jun";
    const game = new Game();
    const result = game.carList;

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    await game.inputCarName();
    expect(result).toEqual([new Car("pobi"), new Car("woni"), new Car("jun")]);
  });

  test("자동차 이름 예외 처리", async () => {
    const input = "yujin, yuuujin";
    const game = new Game();

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    expect(game.inputCarName()).rejects.toThrow(
      "[ERROR] 이름이 5자 초과입니다."
    );
  });

  // 시도할 횟수 입력받기 기능 테스트
  test("시도할 횟수 입력받기", async () => {
    const input = 5;
    const game = new Game();

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    await game.inputAttemptNumber();
    expect(game.attemptNumber).toBe(5);
  });

  test("시도할 횟수 예외 처리", async () => {
    const input = "56ab9";
    const game = new Game();

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    expect(game.inputAttemptNumber()).rejects.toThrow(
      "[ERROR] 숫자를 입력해주세요."
    );
  });

  // 무작위 값 구하기 기능 테스트
  test("무작위 값 구하기", () => {
    const result = Car.generateRandomValue();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(9);
  });

  // 자동차 위치 계산하기 기능 테스트
  test("자동차 위치 계산하기", () => {
    const randomValues = [0, 3, 4, 5];
    const calculatedPositions = [0, 0, 1, 1];
    const result = [];

    randomValues.map((randomValue) => {
      const car = new Car();
      Car.generateRandomValue = jest.fn().mockReturnValue(randomValue);
      car.calculatePosition();
      result.push(car.position);
    });
    expect(result).toEqual(calculatedPositions);
  });
});
