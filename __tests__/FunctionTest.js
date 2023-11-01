import { Console } from "@woowacourse/mission-utils";
import Game from "../src/Game.js";
import Car from "../src/Car.js";
import App from "../src/App.js";

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

    for (const randomValue of randomValues) {
      const car = new Car();
      Car.generateRandomValue = jest.fn().mockReturnValue(randomValue);
      car.calculatePosition();
      result.push(car.position);
    }
    expect(result).toEqual(calculatedPositions);
  });

  // 실행 결과 출력하기 기능 테스트
  test("실행 결과 출력하기", () => {
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

  // 최종 우승자 결정하기
  test("최종 우승자 결정하기", async () => {
    const game = new Game();
    const input = "a,b,c";
    const finalWinnerList = ["b", "c"];
    const compareResult = new Map([
      ["a", [false, false]],
      ["b", [true, false]],
      ["c", [false, true]],
    ]);

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    await game.inputCarName();

    for (const car of game.getCarList()) {
      const name = car.getName();
      const firstCompareResult = compareResult.get(name)[0];
      const secondCompareResult = compareResult.get(name)[1];

      car.isFasterThan = jest.fn().mockReturnValue(firstCompareResult);
      car.isSameAs = jest.fn().mockReturnValue(secondCompareResult);
    }
    game.decideFinalWinner();
    expect(game.getFinalWinnerList()).toEqual(finalWinnerList);
  });

  // 최종 우승자 출력하기
  test("최종 우승자 출력하기", async () => {
    const game = new Game();
    const input = "a,b,c";
    const finalResultMessage = "최종 우승자 : b, c";
    const compareResult = new Map([
      ["a", [false, false]],
      ["b", [true, false]],
      ["c", [false, true]],
    ]);
    const spyFn = jest.spyOn(Console, "print");

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    await game.inputCarName();

    for (const car of game.getCarList()) {
      const name = car.getName();
      const firstCompareResult = compareResult.get(name)[0];
      const secondCompareResult = compareResult.get(name)[1];

      car.isFasterThan = jest.fn().mockReturnValue(firstCompareResult);
      car.isSameAs = jest.fn().mockReturnValue(secondCompareResult);
    }
    game.decideFinalWinner();
    App.printFinalResultMessage(game);
    expect(spyFn).toHaveBeenCalledWith(finalResultMessage);
  });
});
