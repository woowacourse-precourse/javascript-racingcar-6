import { Console } from "@woowacourse/mission-utils";
import { ErrorMessage } from "../src/common/message";
import CarRacing from "../src/CarRacing";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("입력한 차 이름 검증 테스트", () => {
  let racing;

  beforeEach(() => {
    racing = new CarRacing();
  });

  test("자동차 이름이 5자 이하가 아닌 경우", async () => {
    mockQuestions(["abcdef", "igklmn"]);
    await expect(racing.readCarName()).rejects.toThrow(
      ErrorMessage.RACING_CAR_INPUT_ERROR_MESSAGE
    );
  });

  test("자동차 이름이 영소문자가 아닌 경우", async () => {
    mockQuestions(["ABC", "IGk"]);
    await expect(racing.readCarName()).rejects.toThrow(
      ErrorMessage.RACING_CAR_INPUT_ERROR_MESSAGE
    );
  });

  test("자동차 이름에 공백이 포함된 경우", async () => {
    mockQuestions(["ab c", "i gk", " def"]);
    await expect(racing.readCarName()).rejects.toThrow(
      ErrorMessage.RACING_CAR_INPUT_ERROR_MESSAGE
    );
  });

  test("자동차 이름이 빈 값인 경우 / , 가 2개 이상 사용되는 경우", async () => {
    mockQuestions([" "]);
    await expect(racing.readCarName()).rejects.toThrow(
      ErrorMessage.RACING_CAR_INPUT_ERROR_MESSAGE
    );
  });

  test("자동차 이름이 중복되는 경우", async () => {
    mockQuestions(["aa,aa"]);
    await expect(racing.readCarName()).rejects.toThrow(
      ErrorMessage.RACING_CAR_DUPLICATE_ERROR_MESSAGE
    );
  });
});
