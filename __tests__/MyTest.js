import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Message from "../src/util/Message.js";

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

// ===================== 자동차 이름 ===========================
describe("예외처리", () => {
  test.each([[["pobi javaji"]], [["pobi eastjun"]]])(
    "이름을 , 로 구분 안 한 경우 (입력하지 않은 경우)",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        Message.ERROR.NAME_SHOULD_SPLIT_BY_COMMA
      );
    }
  );

  test("이름에서 ,가 연속으로 중복되거나 마지막에 ,를 입력한 경우", async () => {
    // given
    const randoms = [4, 4, 1, 4];
    const inputs = ["pobi,,woni,", "2"];
    const outputs = [
      "pobi : -",
      "woni : -",
      "pobi : -",
      "woni : --",
      "최종 우승자 : woni",
    ];
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

  test.each([[["pobi,javaji"]], [["pobiiiii,eastjun"]]])(
    "이름이 5자 초과한 경우",
    async (inputs) => {
      // given
      mockQuestions(inputs);
      // when
      const app = new App();
      // then
      await expect(app.play()).rejects.toThrow(
        Message.ERROR.NAME_EXCEEDED_MAX_LEN
      );
    }
  );

  test.each([[["pobi,pobi"]]])("이름이 중복된 경우", async (inputs) => {
    // given
    mockQuestions(inputs);
    // when
    const app = new App();
    // then
    await expect(app.play()).rejects.toThrow(Message.ERROR.NAME_HAS_REDUNDANCY);
  });

  // ===================== 실행 횟수 ===========================
  test.each([
    [["pobi,java"], ["a"]],
    [["asd,fgh,sdf"], ["13$"]],
    [["asd,fgh,sdf"], [""]],
    [["asd,fgh,sdf"], ["0"]],
  ])("실행횟수 입력이 양의 정수가 아닌 경우", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.play()).rejects.toThrow(
      Message.ERROR.EXECUTE_COUNT_SHOULD_BE_POSITIVE_INT
    );
  });
});

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const randoms = [4, 4, 1, 4];
    const inputs = ["pobi,woni", "2"];
    const outputs = [
      "pobi : -",
      "woni : -",
      "pobi : -",
      "woni : --",
      "최종 우승자 : woni",
    ];
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
});
