import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car.js";
import GameBoard from "../src/GameBoard.js";

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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );

  test("주행 함수 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];

    mockRandoms([...randoms]);

    // when
    const car = new Car("abc");
    car.drive();

    // then
    expect(car.path).toEqual(["-"]);
  });

  test("정지 테스트", async () => {
    // given
    const STOP = 3;
    const randoms = [STOP];

    mockRandoms([...randoms]);

    // when
    const car = new Car("abc");
    car.drive();

    // then
    expect(car.path).toEqual([]);
  });

  test("정지 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const outputs = ["abc : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();
    const cars = [new Car("abc"), new Car("def")];

    mockRandoms([...randoms]);

    // when
    cars.forEach((car) => {
      car.drive();
    });
    const board = new GameBoard(cars);
    board.printResult();
    board.printWinner();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : abc")
    );
  });
});
