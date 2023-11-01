import InputView from "../src/views/InputView";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/constants";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("InputView 클래스 테스트", () => {
  test("경주할 자동차 리스트를 입력받아 반환한다", async () => {
    // given
    const input = "test1,test2,test3";
    mockQuestions([input]);
    const inputView = new InputView();

    // when
    const userInput = await inputView.getCarNamesUserInput();

    // then
    expect(userInput).toEqual(input);
  });

  test("경주할 자동차 리스트의 값이 빈 문자열이라면 에러를 반환한다", async () => {
    // given
    const input = "";
    mockQuestions([input]);
    const inputView = new InputView();

    // when then
    await expect(inputView.getCarNamesUserInput()).rejects.toThrow(
      `[ERROR] ${ERROR_MESSAGE.isCarListNull}`
    );
  });

  test("총 라운드 수를 입력받아 반환한다", async () => {
    // given
    const input = 5;
    mockQuestions([input]);
    const inputView = new InputView();

    // when
    const userInput = await inputView.getTotalRoundUserInput();

    // then
    expect(userInput).toEqual(input);
  });

  test("총 라운드 수의 입력이 정수가 아니라면 에러를 반환한다", async () => {
    // given
    const input = "string";
    mockQuestions([input]);
    const inputView = new InputView();

    // when then
    await expect(inputView.getTotalRoundUserInput()).rejects.toThrow(
      `[ERROR] ${ERROR_MESSAGE.isNotNumber}`
    );
  });

  test("총 라운드 수의 입력이 0보다 작은 정수라면 에러를 반환한다", async () => {
    // given
    const input = 0;
    mockQuestions([input]);
    const inputView = new InputView();

    // when then
    await expect(inputView.getTotalRoundUserInput()).rejects.toThrow(
      `[ERROR] ${ERROR_MESSAGE.isNotOverZero}`
    );
  });
});
