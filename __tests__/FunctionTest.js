import { Console } from "@woowacourse/mission-utils";
import Game from "../src/Game.js";
import Car from "../src/Car.js";

describe("기능 테스트", () => {
  test("자동차 이름 입력받기", async () => {
    const input = "pobi,woni,jun";
    const game = new Game();
    const result = game.carList;

    //입력을 input = "pobi,woni,jun"으로 고정
    Console.readLineAsync = jest
      .fn()
      .mockImplementation(() => Promise.resolve(input));

    await game.inputCarName();
    expect(result).toEqual([new Car("pobi"), new Car("woni"), new Car("jun")]);
  });

  test("자동차 이름 예외 처리", async () => {
    const input = "yujin, yuuujin";
    const game = new Game();

    //입력을 input = "yujin, yuuujin"으로 고정
    Console.readLineAsync = jest
      .fn()
      .mockImplementation(() => Promise.resolve(input));

    expect(game.inputCarName()).rejects.toThrow(
      "[ERROR] 이름이 5자 초과입니다."
    );
  });
});
