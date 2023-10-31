import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// const mockRandoms = (numbers) => {
//   MissionUtils.Random.pickNumberInRange = jest.fn();
//   numbers.reduce((acc, number) => {
//     return acc.mockReturnValueOnce(number);
//   }, MissionUtils.Random.pickNumberInRange);
// };

// const getLogSpy = () => {
//   const logSpy = jest.spyOn(MissionUtils.Console, "print");
//   logSpy.mockClear();
//   return logSpy;
// };

describe("구현한 기능 테스트", () => {
  test("입력값 확인", async () => {
    // given
    const inputs = ["pobi,woni,jun"];

    mockQuestions(inputs);

    // when
    const app = new App();
    const carName = await app.getCarInput();

    // then
    expect(carName).toEqual(["pobi", "woni", "jun"]);
  });

  test("경주 횟수 확인", async () => {
    // given
    const inputs = ["5"];

    mockQuestions(inputs);

    // when
    const app = new App();
    const raceCount = await app.getRaceCount();

    // then
    expect(raceCount).toBe(5);
  });

  test("경주 진행 및 횟수 확인", async () => {
    // given
    const carName = ["pobi", "woni", "jun"];
    const raceCount = 5;

    // when
    const app = new App();
    const carResult = await app.startRace(carName, raceCount);

    // then
    expect(carResult.length).toBe(3);
    carResult.forEach((car) => {
      expect(car.name).toBeTruthy();
      expect(car.move).toBeGreaterThanOrEqual(0);
    });
  });

  test("우승자 확인", async () => {
    // given
    const carName = ["pobi", "woni", "jun"];
    const raceCount = 5;

    // when
    const app = new App();
    const raceResult = await app.startRace(carName, raceCount);
    const winner = app.getWinner(raceResult);

    // then
    expect(winner.length).toBeGreaterThanOrEqual(1);
    winner.forEach((winner) => {
      expect(winner).toBeTruthy();
    });
  });
});
