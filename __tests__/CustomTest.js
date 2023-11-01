import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Car from "../src/Model/Car.js";
import * as Util from "../src/utils/index.js";

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
    const inputs = ["Kim,Park", "1"];
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    const result = [{
      name: "Kim",
      position: 1
    }, {
      name: "Park",
      position: 0
    }];

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const mockCar = jest.spyOn(Car.prototype, "init");

    // when
    const app = new App();
    await app.play();
    
    // then
    expect(mockCar).toHaveBeenCalledWith(result);
  });
});


describe("3. 자동차 경주 게임을 진행한다", () => {
  test("3-1. 시도 횟수마다 자동차 대수만큼 무작위 값을 생성한다", async () => {
    // given
    const tryCount = 3;
    const inputs = ["Kim,Park", `${tryCount}`];
    const randomSpy = jest.spyOn(Util, "generateRandomNumber");
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    expect(randomSpy).toHaveBeenCalledTimes(tryCount);
    randomSpy.mockRestore();
  });

  test("3-2. 무작위 값이 4 이상일 경우 해당 자동차를 전진시킨다", async () => {
    // given
    const tryCount = 3;
    const inputs = ["Kim,Park", `${tryCount}`];
    const result = [{
      name: "Kim",
      position: tryCount
    }, {
      name: "Park",
      position: 0
    }];
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    const extendedRandoms = Array(randoms.length * tryCount).fill(0).map((_, idx) => randoms[idx % randoms.length]);
    mockQuestions(inputs);
    mockRandoms([...extendedRandoms]);

    const mockCar = jest.spyOn(Car.prototype, "init");
    
    // when
    const app = new App();
    await app.play();

    // then
    expect(mockCar).toHaveBeenCalledWith(result);
  });

  test("3-3. 입력된 횟수에 대해 각 횟수마다 실행 결과를 출력한다", async () => {
    // given
    const tryCount = 3;
    const inputs = ["Kim,Park", `${tryCount}`];
    const outputs = ["Kim : ", "Park : "];
    const logSpy = getLogSpy();
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    const extendedRandoms = Array(randoms.length * tryCount).fill(0).map((_, idx) => randoms[idx % randoms.length]);
    mockQuestions(inputs);
    mockRandoms([...extendedRandoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("3-4. 최종 우승자를 결정하고 출력한다.", async () => {
    const tryCount = 3;
    const inputs = ["Kim,Park", `${tryCount}`];
    const output = "최종 우승자 :"
    const logSpy = getLogSpy();
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    const extendedRandoms = Array(randoms.length * tryCount).fill(0).map((_, idx) => randoms[idx % randoms.length]);
    mockQuestions(inputs);
    mockRandoms([...extendedRandoms]);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});