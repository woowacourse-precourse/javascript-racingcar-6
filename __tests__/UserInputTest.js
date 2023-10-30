import Messages from "../src/constants/Messages.js";
import UserInput from "../src/UserInput.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("사용자 입력 관련 테스트", () => {
  test("자동차 이름을 입력하면 자동차 이름을 키로, 0을 값으로 갖는 객체를 반환한다", async () => {
    const inputs = ["abc,abcd,abcde"];
    const user = new UserInput();

    mockQuestions(inputs);

    await expect(user.getCarNames()).resolves.toEqual({
      abc: 0,
      abcd: 0,
      abcde: 0,
    });
  });

  test("자동차 이름이 5글자를 넘을 경우 에러를 반환한다", async () => {
    const inputs = ["abcd,abcde,abcdefg"];
    const user = new UserInput();

    mockQuestions(inputs);

    await expect(user.getCarNames()).rejects.toThrow(
      Messages.ERROR.EXCEED_CAR_NAME_LETTER
    );
  });

  test.each([[[",a"]], [["a,"]]])(
    "자동차 이름이 1글자 미만일 경우 에러를 반환한다",
    async (inputs) => {
      const user = new UserInput();

      mockQuestions(inputs);

      await expect(user.getCarNames()).rejects.toThrow(
        Messages.ERROR.SHORT_CAR_NAME_LETTER
      );
    }
  );

  test("자동차 이름이 10개를 넘을 경우 에러를 반환한다", async () => {
    const inputs = ["a,b,c,d,e,f,g,h,i,j,k"];
    const user = new UserInput();

    mockQuestions(inputs);

    await expect(user.getCarNames()).rejects.toThrow(
      Messages.ERROR.EXEED_CAR_NAME_NUMBER
    );
  });

  test("자동차 이름이 2개 미만일 경우 에러를 반환한다", async () => {
    const inputs = ["abc"];
    const user = new UserInput();

    mockQuestions(inputs);

    await expect(user.getCarNames()).rejects.toThrow(
      Messages.ERROR.SHORT_CAR_NAME_NUMBER
    );
  });

  test("자동차 이름이 중복될 경우 에러를 반환한다", async () => {
    const inputs = ["abcd,abcde,abcde"];
    const user = new UserInput();

    mockQuestions(inputs);

    await expect(user.getCarNames()).rejects.toThrow(
      Messages.ERROR.DUPLICATION_CAR_NAME
    );
  });

  test("시도 횟수를 입력하면 숫자를 반환한다", async () => {
    const inputs = ["3"];
    const user = new UserInput();

    mockQuestions(inputs);

    await expect(user.getTryNumber()).resolves.toEqual(3);
  });

  test.each([[["1abc"]], [["2*3"]]])(
    "시도 횟수에 숫자가 아닌 글자를 입력한 경우 에러를 반환한다",
    async (inputs) => {
      const user = new UserInput();

      mockQuestions(inputs);

      await expect(user.getTryNumber()).rejects.toThrow(
        Messages.ERROR.WRONG_TRY_NUMBER
      );
    }
  );

  test("시도 횟수가 15를 넘을 경우 에러를 반환한다", async () => {
    const inputs = ["17"];
    const user = new UserInput();

    mockQuestions(inputs);

    await expect(user.getTryNumber()).rejects.toThrow(
      Messages.ERROR.EXCEED_TRY_NUMBER
    );
  });

  test.each([[[""]], [["0"]]])(
    "시도 횟수가 1미만인 경우 에러를 반환한다",
    async (inputs) => {
      const user = new UserInput();

      mockQuestions(inputs);

      await expect(user.getTryNumber()).rejects.toThrow(
        Messages.ERROR.SHORT_TRY_NUMBER
      );
    }
  );
});
