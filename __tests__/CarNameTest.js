import { MissionUtils } from "@woowacourse/mission-utils";
import Init from "../src/Init";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("게임 초기 세팅 값 예외 테스트 ", () => {
  test("자동차 이름 5자 이하 판별", async () => {
    const carNames = ["jihyun,woo,hi", 2];

    mockQuestions(carNames);

    const init = new Init();

    await expect(init.start()).rejects.toThrow("[ERROR]");
  });
  test("공백 사이 자동차 이름이 없을 경우", async () => {
    const carNames = ["hi,woo,,", 2];

    mockQuestions(carNames);

    const init = new Init();

    await expect(init.start()).rejects.toThrow("[ERROR]");
  });
  test("시도 횟수를 숫자가 아닌 값 입력했을 경우", async () => {
    const carNames = ["hi,woo,jh", "둘"];

    mockQuestions(carNames);

    const init = new Init();

    await expect(init.start()).rejects.toThrow("[ERROR]");
  });
});
