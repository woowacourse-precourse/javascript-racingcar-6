import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car";
import RacingGame from "../src/RacingGame";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("RacingGame 클래스", () => {
  test("자동차 이름 및 라운드 수 받아서 인스턴스 생성", () => {
    const racingGame = new RacingGame(["car1", "car2"], 5);
    expect(racingGame.cars[0]).toBeInstanceOf(Car);
    expect(racingGame.cars[0].name).toBe("car1");
    expect(racingGame.cars[1].name).toBe("car2");
    expect(racingGame.rounds).toBe(5);
  });

  describe("generateRandomNumber 함수", () => {
    test("0에서 9 사이 랜덤값 반환", () => {
      const racingGame = new RacingGame(["car1", "car2"], 5);

      mockRandoms([1, 2]);

      expect(racingGame.generateRandomNumber()).toBe(1);
      expect(racingGame.generateRandomNumber()).toBe(2);
    });
  });

  describe("checkCarCanMove 함수", () => {
    test("랜덤값이 4 이상이면 true 반환", () => {
      const racingGame = new RacingGame(["car1", "car2"], 5);

      expect(racingGame.checkCarCanMove(0)).toBe(false);
      expect(racingGame.checkCarCanMove(4)).toBe(true);
      expect(racingGame.checkCarCanMove(5)).toBe(true);
    });
  });

  describe("start 함수", () => {
    test("라운드 수 만큼 게임 진행", () => {
      const racingGame = new RacingGame(["car1", "car2"], 5);
      mockRandoms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      racingGame.start();

      expect(racingGame.cars[0].distance).toBe(3); // 1,3,5,7,9
      expect(racingGame.cars[1].distance).toBe(4); // 2,4,6,8,10
    });
  });

  describe("getWinners 함수", () => {
    test("우승자 이름 배열 반환", () => {
      const racingGame = new RacingGame(["car1", "car2", "car3"], 5);
      racingGame.cars[0].distance = 5;
      racingGame.cars[1].distance = 3;
      racingGame.cars[2].distance = 5;

      const winners = racingGame.getWinners();

      expect(winners).toEqual(["car1", "car3"]);
    });
    test("우승자가 없는 경우 빈 배열 반환", () => {
      const racingGame = new RacingGame(["car1", "car2", "car3"], 5);
      racingGame.cars[0].distance = 0;
      racingGame.cars[1].distance = 0;
      racingGame.cars[2].distance = 0;

      const winners = racingGame.getWinners();

      expect(winners).toEqual([]);
    });
  });
});
