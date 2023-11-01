import { MissionUtils } from "@woowacourse/mission-utils";
import RaceGameController from '../src/controllers/raceGameController.js';
import MESSAGES from "../src/constants/Messages.js";
import App from "../src/App.js";

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

describe("자동차 이름 유효성 검사", () => {
  test.each([
    [["david,sonata,abc"]],
    [[",science"]],
  ])("이름의 길이가 1~5자리인지", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(MESSAGES.CAR_NAME_INPUT_ERROR_LENGTH);
  });

  test.each([
    [["bo i, SSa , se l"]],
    [[" yaho,js "]]
  ])("이름에 공백이 없는지", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(MESSAGES.CAR_NAME_INPUT_ERROR_BLANK);
  });

  test.each([
    [["po,pori,ri,po"]],
    [["ab,bc,cd,de,cd"]]
  ])("이름이 중복되지 않는지", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(MESSAGES.CAR_NAME_INPUT_ERROR_DUPLICATION);
  });
});