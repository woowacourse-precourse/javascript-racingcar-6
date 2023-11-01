import { MissionUtils } from "@woowacourse/mission-utils";
import NUMBER from "../src/constants/NUMBER.js";
import Car from "../src/Car.js";
import RacingGame from "../src/RacingGame.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("RacingGame 클래스 테스트", () => {
  const carNameList = ["pobi", "woni", "jun"];
  test("new RacingGame(%s) 테스트", () => {
    const racingGame = new RacingGame(carNameList, 5);
    const carList = [new Car("pobi"), new Car("woni"), new Car("jun")];

    expect(racingGame.carList).toEqual(carList);
  });

  test("RacingGame Status 테스트", () => {
    const racingGame = new RacingGame(carNameList, 5);
    const gameStatus = [
      { carName: "pobi", distance: 0 },
      { carName: "woni", distance: 0 },
      { carName: "jun", distance: 0 },
    ];
    expect(racingGame.gameStatus).toEqual(gameStatus);
  });

  test("RacingGame moveAllCars 테스트", () => {
    const randoms = [
      NUMBER.RANDOM.THRESHOLD,
      NUMBER.RANDOM.THRESHOLD - 1,
      NUMBER.RANDOM.THRESHOLD,
    ];
    const carList = [
      { carName: "pobi", distance: 1 },
      { carName: "woni", distance: 0 },
      { carName: "jun", distance: 1 },
    ];
    mockRandoms([...randoms]);

    const racingGame = new RacingGame(carNameList, 5);
    racingGame.moveAllCars();

    expect(racingGame.gameStatus).toEqual(carList);
  });

  test("RacingGame isGameEnd 테스트", () => {
    const racingGame = new RacingGame(carNameList, 1);
    expect(racingGame.isGameEnd).toBe(false);
    racingGame.moveAllCars();
    expect(racingGame.isGameEnd).toBe(true);
  });

  test("RacingGame winner 테스트", () => {
    const racingGame = new RacingGame(carNameList, 5);
    const randoms = [
      NUMBER.RANDOM.THRESHOLD,
      NUMBER.RANDOM.THRESHOLD - 1,
      NUMBER.RANDOM.THRESHOLD,
      NUMBER.RANDOM.THRESHOLD,
      NUMBER.RANDOM.THRESHOLD,
      NUMBER.RANDOM.THRESHOLD - 1,
    ];
    mockRandoms([...randoms]);
    racingGame.moveAllCars();
    racingGame.moveAllCars();

    expect(racingGame.winner).toEqual(["pobi"]);
  });
});
