import { MissionUtils } from "@woowacourse/mission-utils";
import Init from "../src/Init";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 이름 값 예외 테스트 ", () => {
  test("자동차 이름이 5자 이상인 경우 예외 처리", async () => {
    const carNames = ["jihyun,woo,hi"];

    mockQuestions(carNames);

    const init = new Init();

    await expect(init.start()).rejects.toThrow("[ERROR]");
  });
  test("공백 사이 자동차 이름이 없을 경우 예외 처리", async () => {
    const carNames = ["hi,woo,,"];

    mockQuestions(carNames);

    const init = new Init();

    await expect(init.start()).rejects.toThrow("[ERROR]");
  });
});
