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
  })

  test("이름이 숫자, 한글, 알파벳이 아닌 경우", async () => {
    const input = "aa@"
    
    mockQuestions(input);
    await expect(validate.validateName(input)).rejects.toThrow("[ERROR]");
  })

  test("이름 중간에 공백이 존재하는 경우", async () => {
    const input = "ga me"
    
    mockQuestions(input);
    await expect(validate.validateName(input)).rejects.toThrow("[ERROR]");
  })
});
