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

const STOP = NUMBER.MIN_FORWARD - 1;
const MOVE = NUMBER.MIN_FORWARD;

describe("경주 게임 테스트", () => {
  test.each([
    ["하나만 전진", ["car", "bus", "joo"], [MOVE, STOP, STOP], [1, 0, 0]],
    ["둘 다 전진", ["car", "bus"], [MOVE, MOVE], [1, 1]],
    ["셋 다 멈춤", ["car", "bus", "joo"], [STOP, STOP, STOP], [0, 0, 0]],
  ])(
    "1번의 시도에 모든 자동차 전진 시도하기 - %s",
    (testName, carNameArray, randomNumberArray, expectedPositionArray) => {
      mockRandoms([...randomNumberArray]);
      const carArray = carNameArray.map((name) => new Car(name));

      const game = new RacingGame(carArray, 1);
      game.play();
      expect(carArray.map((car) => car.position)).toEqual(
        expectedPositionArray
      );
    }
  );

  test.each([
    ["1번 시도", ["car", "bus"], 1],
    ["3번 시도", ["car", "bus"], 3],
    ["100번 시도", ["car", "bus"], 100],
  ])(
    "시도 횟수만큼 자동차 전진 시도 - %s",
    (testName, carNameArray, attemptCount) => {
      const carArray = carNameArray.map((name) => new Car(name));
      const game = new RacingGame(carArray, attemptCount);
      game.play();
      expect(game.resultArray).toHaveLength(attemptCount);
    }
  );

  test.each([
    [
      "bus 우승",
      [
        { name: "car", position: 3 },
        { name: "bus", position: 5 },
      ],
      ["bus"],
    ],
    [
      "car, bus 공동 우승",
      [
        { name: "car", position: 5 },
        { name: "bus", position: 5 },
      ],
      ["car", "bus"],
    ],
  ])("우승자 이름 배열 반환 - %s", (testName, carArray, expectedArray) => {
    const game = new RacingGame(carArray);
    expect(game.getWinnerNameArray()).toEqual(expectedArray);
  });
});
