import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// ApplicationTest와 같은 mocking function을 서로 반대로 구현해보았다.
const mockQuestion = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  inputs.reduce((acc, input) => {
    return acc.mockResolvedValueOnce(input);
  }, MissionUtils.Console.readLineAsync);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  MissionUtils.Random.pickNumberInRange.mockImplementation(() => {
    return numbers.shift();
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("기능: 이름 입력", () => {
  test("정상 입력", async () => {
    // given
    mockQuestion(["lulu, nana, amy"]);

    //when
    const app = new App();
    await app.setGameData();

    // then
    const gameData = app.getGameData();
    expect(gameData).toHaveProperty("lulu.position", 0);
    expect(gameData).toHaveProperty("nana.position", 0);
    expect(gameData).toHaveProperty("amy.position", 0);
  });
  test.each([
    ["빈 입력일 떄", [""]],
    ["이름이 1개일 때", ["amy"]],
    ["5자를 초과하는 이름일 떄", ["chungha, park"]],
    ["빈 이름일 떄", [", hello"]],
    ["중복된 이름이 있을 떄", ["me, me, you"]],
    [
      "총 개수가 10개를 초과할 때",
      ["one, two, three, four, five, six, seven, eight, nine, ten, more"],
    ],
  ])("[ERROR]: %s", async (testName, inputs) => {
    // given
    mockQuestion(inputs);

    //when
    const app = new App();

    //then
    await expect(app.setGameData()).rejects.toThrow("[ERROR]");
  });
});
describe("기능: 이동 횟수 입력", () => {
  test("정상 입력", async () => {
    //given
    mockQuestion([5]);

    //when
    const app = new App();
    await app.setRepeatCount();

    // then
    expect(app.getRepeatCount()).toBe(5);
  });
  test.each([
    ["빈 입력일 때", [""]],
    ["횟수가 0일 때", [0]],
    ["횟수가 100번 초과일 때", [101]],
    ["입력이 숫자가 아닐 때", ["a9"]],
  ])("[ERROR]: %s", async (testName, inputs) => {
    // given
    mockQuestion(inputs);

    // when
    const app = new App();

    // then
    await expect(app.setRepeatCount()).rejects.toThrow("[ERROR]");
  });
});
describe("기능: 결과 및 우승자 출력", () => {
  test("실행 결과 출력", async () => {
    // given
    const outputs = [
      "실행 결과",
      "bana :",
      "rana : -",
      "bana : -",
      "rana : -",
      "bana : -",
      "rana : --",
    ];
    const logSpy = getLogSpy();
    mockQuestion(["bana, rana", 3]);
    mockRandoms([3, 7, 8, 2, 1, 6]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test.each([
    [
      "단독 우승자 출력",
      ["bana, rana", "3"],
      [3, 7, 8, 2, 1, 6],
      "최종 우승자 : rana",
    ],
    [
      "공동 우승자 출력",
      ["aran, nara, varu", 3],
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      "최종 우승자 : nara, varu",
    ],
  ])("%s", async (testName, inputs, randoms, output) => {
    // given
    const logSpy = getLogSpy();
    mockQuestion(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenLastCalledWith(output);
  });
});
