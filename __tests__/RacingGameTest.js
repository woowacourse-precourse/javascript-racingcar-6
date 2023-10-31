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
});
