import InputCarName from "../src/Input/inputCarName";
import InputTryAmount from "../src/Input/inputTryAmount";
import { MissionUtils } from "@woowacourse/mission-utils";
import GameMessage from "../src/Message/gameMessage";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("Input 테스트", () => {
  test("자동차 이름을 입력받아 배열로 반환", async () => {
    // given
    const inputs = ["kim,park,jeong"];
    mockQuestions(inputs);

    // when
    const carInput = await InputCarName();

    // then
    expect(carInput).toEqual(["kim", "park", "jeong"]);
  });

  test("자동차 이름을 입력받지 못했을 시 에러", async () => {
    // given
    const inputs = [""];
    mockQuestions(inputs);
    const carInput = InputCarName();

    // when & then
    await expect(carInput).rejects.toThrow(GameMessage.ERROR.CAR_NOT_INPUTED);
  });

  test("이름이 중복될 경우 에러", async () => {
    // given
    const inputs = ["na,na"];
    mockQuestions(inputs);
    const carInput = InputCarName();

    // when & then
    await expect(carInput).rejects.toThrow(GameMessage.ERROR.CAR_NAME_DUPLICATED);
  });

  test("경주 횟수를 입력해서 숫자로 반환", async () => {
    // given
    const inputs = ["5"];
    mockQuestions(inputs);

    // when
    const tryAmountInput = await InputTryAmount();

    // then
    expect(tryAmountInput).toEqual(5);
  });

  test("경주 횟수가 정확하지 않을 시 에러", async () => {
    // given
    const inputs = [""];
    mockQuestions(inputs);
    const tryAmountInput = InputTryAmount();

    // when & then
    await expect(tryAmountInput).rejects.toThrow(GameMessage.ERROR.TRY_NUMBER_INVALID);
  });
});
