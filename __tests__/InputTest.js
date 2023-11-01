import { Console } from "@woowacourse/mission-utils";
import Game from "../src/Game.js";
import Car from "../src/Car.js";

describe("입력 테스트", () => {
  // 자동차 이름 입력받기 기능 테스트
  test("자동차 이름 입력받기 기능", async () => {
    const input = "pobi,woni,jun";
    const game = new Game();
    const result = game.carList;

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    await game.inputCarName();
    expect(result).toEqual([new Car("pobi"), new Car("woni"), new Car("jun")]);
  });

  test("자동차 이름 예외 처리 기능", async () => {
    const input = "yujin, yuuujin";
    const game = new Game();

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    expect(game.inputCarName()).rejects.toThrow(
      "[ERROR] 이름이 5자 초과입니다."
    );
  });

  // 시도할 횟수 입력받기 기능 테스트
  test("시도할 횟수 입력받기 기능", async () => {
    const input = 5;
    const game = new Game();

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    await game.inputAttemptNumber();
    expect(game.attemptNumber).toBe(5);
  });

  test("시도할 횟수 예외 처리 기능", async () => {
    const input = "56ab9";
    const game = new Game();

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    expect(game.inputAttemptNumber()).rejects.toThrow(
      "[ERROR] 숫자를 입력해주세요."
    );
  });
});
