import NUMBER from "../src/constant/NUMBER.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car.js";
import RacingGame from "../src/RacingGame.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("경주 게임 테스트", () => {
  test.each([
    [
      "하나만 전진",
      ["car", "bus"],
      [NUMBER.MIN_FORWARD, NUMBER.MIN_FORWARD - 1],
      [1, 0],
    ],
    [
      "둘 다 전진",
      ["car", "bus"],
      [NUMBER.MIN_FORWARD, NUMBER.MIN_FORWARD],
      [1, 1],
    ],
    [
      "셋 다 멈춤",
      ["car", "bus", "joo"],
      [NUMBER.MIN_FORWARD - 1, NUMBER.MIN_FORWARD - 1, NUMBER.MIN_FORWARD - 1],
      [0, 0, 0],
    ],
  ])(
    "모든 자동차 전진 시도하기 - %s",
    (testName, carNameArray, randomNumberArray, expectedPositionArray) => {
      mockRandoms([...randomNumberArray]);
      const carArray = carNameArray.map((name) => new Car(name));

      const game = new RacingGame(carArray);
      game.moveCars();
      expect(carArray.map((car) => car.position)).toEqual(
        expectedPositionArray
      );
    }
  );
});
