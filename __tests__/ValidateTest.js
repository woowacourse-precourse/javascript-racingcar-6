import Validate from "../src/Validate";
import { MissionUtils } from "@woowacourse/mission-utils";

const validate = new Validate();

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe("자동차 이름 예외 처리", () => {
  test("이름이 입력되지 않은 경우", async () => {
    const input = "";

    mockQuestions(input);
    await expect(validate.validateName(input)).rejects.toThrow("[ERROR]");
  });

  test("이름이 5자 이상인 경우", async () => {
    const input = "racing"

    mockQuestions(input);
    await expect(validate.validateName(input)).rejects.toThrow("[ERROR]");
  });

  test("이름이 숫자, 한글, 알파벳이 아닌 경우", async () => {
    const input = "aa@"
    
    mockQuestions(input);
    await expect(validate.validateName(input)).rejects.toThrow("[ERROR]");
  });

  test("이름 중간에 공백이 존재하는 경우", async () => {
    const input = "ga me"
    
    mockQuestions(input);
    await expect(validate.validateName(input)).rejects.toThrow("[ERROR]");
  });
});

describe("반복 횟수 입력에 대한 예외 처리", () => {
  test("입력 값이 없는 경우", async () => {
    const input = ""

    mockQuestions(input);
    await expect(validate.validateNumber(input)).rejects.toThrow("[ERROR]");
  });

  test("입력 값이 숫자가 아닌 경우", async () => {
    const input = "game"

    mockQuestions(input);
    await expect(validate.validateNumber(input)).rejects.toThrow("[ERROR]");
  });

  test("입력 값이 정수 아닌 경우", async () => {
    const input = "1.3"

    mockQuestions(input);
    await expect(validate.validateNumber(input)).rejects.toThrow("[ERROR]");
  });

  test("입력 값이 1보다 작은 경우", async () => {
    const input = "-2"

    mockQuestions(input);
    await expect(validate.validateNumber(input)).rejects.toThrow("[ERROR]");
  });
})