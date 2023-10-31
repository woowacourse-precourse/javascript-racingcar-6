import { MissionUtils } from "@woowacourse/mission-utils";
import Game from "../src/game/Game";
import { CARS } from "../src/Constants.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Game 클래스의 메소드들의 테스트", () => {
  beforeEach(() => {
    CARS.length = 0;
    jest.resetAllMocks();
  });

  test("입력 받은 자동차 이름을 초기 전진횟수와 함께 CARS 배열에 저장하는가", () => {
    // given
    const input = "cars1,cars2,cars3";
    // when
    const game = new Game();
    game.storeCars(input);
    // then
    expect(CARS).toEqual([
      { carName: "cars1", forwardNumber: 0 },
      { carName: "cars2", forwardNumber: 0 },
      { carName: "cars3", forwardNumber: 0 },
    ]);
  });

  test("각각의 레이스 게임을 실행하는 playEachRaceGame메소드가 4이상의 값이 나왔을 때만 전진하도록 올바르게 작동하는가", () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    CARS.push({ carName: "cars1", forwardNumber: 0 });
    CARS.push({ carName: "cars2", forwardNumber: 0 });
    mockRandoms([...randoms]);
    // when
    const game = new Game();
    game.playEachRaceGame();
    // then
    expect(CARS).toEqual([
      { carName: "cars1", forwardNumber: 1 },
      { carName: "cars2", forwardNumber: 0 },
    ]);
  });

  test("findRaceWinner메소드가 최종 단독 우승자를 객체로 올바르게 반환하는가", () => {
    // given
    CARS.push({ carName: "cars1", forwardNumber: 5 });
    CARS.push({ carName: "cars2", forwardNumber: 3 });
    CARS.push({ carName: "cars3", forwardNumber: 4 });
    // when
    const game = new Game();
    // then
    expect(game.findRaceWinner()).toEqual([{ carName: "cars1", forwardNumber: 5 }]);
  });

  test("findRaceWinner메소드가 공동 우승자 역시 객체로 올바르게 반환하는가", () => {
    // given
    CARS.push({ carName: "cars1", forwardNumber: 5 });
    CARS.push({ carName: "cars2", forwardNumber: 5 });
    CARS.push({ carName: "cars3", forwardNumber: 4 });
    // when
    const game = new Game();
    // then
    expect(game.findRaceWinner()).toEqual([{ carName: "cars1", forwardNumber: 5 },{ carName: "cars2", forwardNumber: 5 }]);
  });

  test('getRaceWinnerCarNames메소드가 단독 우승자의 이름을 잘 반환하는가', () => {
    // given
    CARS.push({ carName: "cars1", forwardNumber: 5 });
    CARS.push({ carName: "cars2", forwardNumber: 3 });
    CARS.push({ carName: "cars3", forwardNumber: 4 });
    // when
    const game = new Game();
    // then
    expect(game.getRaceWinnerCarNames()).toContain('cars1');
  });

  test('getRaceWinnerCarNames메소드가 공동 우승자의 이름을 잘 반환하는가', () => {
    // given
    CARS.push({ carName: "cars1", forwardNumber: 5 });
    CARS.push({ carName: "cars2", forwardNumber: 3 });
    CARS.push({ carName: "cars3", forwardNumber: 5 });
    // when
    const game = new Game();
    // then
    expect(game.getRaceWinnerCarNames()).toEqual(
        expect.stringContaining("cars1")
    );
    expect(game.getRaceWinnerCarNames()).toEqual(
        expect.stringContaining("cars3")
    );
  });
});
