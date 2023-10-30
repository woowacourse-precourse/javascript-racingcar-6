import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import GameController from "../src/Controller/GameController.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("1. 사용자의 입력을 받는다", () => {
  test("1-1. 경주할 자동차의 이름을 입력받는다 - 이름이 5글자 넘는 경우", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("1-1. 경주할 자동차의 이름을 입력받는다 - 이름이 0개인 경우", async () => {
    // given
    const inputs = [""];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([
    [["pobi,woni"], "a"],
    [["pobi,woni"], "1.5"],
    [["pobi,woni"], "-1"],
  ])("1-2. 시도할 횟수를 입력받는다 - 시도 횟수가 숫자가 아닌 경우", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

describe("2. 입력된 자동차 이름을 바탕으로 자동차를 생성한다", () => {
  test("자동차 생성하기", async () => {
    // given
    const gameController = new GameController();
    const carNames = ["pobi", "woni"];
    const result = [
      { name: "pobi", position: 0 },
      { name: "woni", position: 0 },
    ];

    // when
    gameController.createCar(carNames);
    
    // then
    expect(gameController.car.cars).toEqual(result);
  });
});

describe("3. 자동차 경주 게임을 진행한다", () => {
  test("3-1. 시도 횟수마다 자동차 대수만큼 무작위 값을 생성한다", async () => {
    // given
    const gameController = new GameController();
    const carNames = ["kim", "park"];
    const tryCount = 3;
    gameController.tryCount = tryCount;

    // when
    const originalGenerateRandomNumber = gameController.generateRandomNumber;
    gameController.generateRandomNumber = jest.fn(originalGenerateRandomNumber);

    gameController.createCar(carNames);
    gameController.startGame();

    // then
    expect(gameController.generateRandomNumber).toHaveBeenCalledTimes(tryCount);
  });

  test("3-2. 무작위 값이 4 이상일 경우 해당 자동차를 전진시킨다", () => {
    // given
    const gameController = new GameController();
    const carNames = ["kim", "park"];
    const tryCount = 3;
    gameController.tryCount = tryCount;
    gameController.generateRandomNumber = jest.fn(() => [4, 0]); // works

    // when
    gameController.createCar(carNames);
    gameController.startGame();

    // then
    expect(gameController.car.cars[0].position).toBe(3);
  });

  test("3-3. 입력된 횟수에 대해 각 횟수마다 실행 결과를 출력한다", () => {
    // given
    const gameController = new GameController();
    const carNames = ["Kim", "Park"];
    const tryCount = 3;
    gameController.tryCount = tryCount;
    const outputs = ["Kim : ", "Park : "];

    // when
    const logSpy = getLogSpy();
    gameController.createCar(carNames);
    gameController.startGame();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("3-4. 최종 우승자를 결정하고 출력한다.", () => {
    const gameController = new GameController();
    const carNames = ["Kim", "Park"];
    const tryCount = 3;
    gameController.tryCount = tryCount;
    gameController.generateRandomNumber = jest.fn(() => [4, 0]);
    const output = "최종 우승자 : Kim";

    // when
    const logSpy = getLogSpy();
    gameController.createCar(carNames);
    gameController.startGame();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});