import { mockQuestions } from "../../src/utils/testUtils";
import carHandler from "../../src/handler/carHandler";

const ERROR_MESSAGES = {
  NOT_SPACE: "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다.",
  NOT_OVER_5: "[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다.",
  NOT_DUPLICATION: "[ERROR] 자동차 이름에 중복이 있습니다.",
  MUST_OVER_2: "[ERROR] 자동차 이름은 2개 이상 입력해주세요.",
  MUST_INPUT: "[ERROR] 자동차 이름이 공백('') 이어선 안됩니다.",
};

async function errorCheck(answer, message, type = "error") {
  mockQuestions(answer);
  if (type === "error")
    await expect(carHandler.readCarsInput()).rejects.toThrow(message);
  if (type === "pass") {
    const cars = await carHandler.readCarsInput();
    expect(cars).toEqual(message);
  }
}

describe("carHandler 테스트", () => {
  const ERROR_CASES = [
    [[" car,car34,car1"], ERROR_MESSAGES.NOT_SPACE],
    [["carcar,car34,car1"], ERROR_MESSAGES.NOT_OVER_5],
    [["carca,carca,car1"], ERROR_MESSAGES.NOT_DUPLICATION],
    [["carca"], ERROR_MESSAGES.MUST_OVER_2],
    [[" "], ERROR_MESSAGES.MUST_OVER_2],
    [["lurgi,"], ERROR_MESSAGES.MUST_INPUT],
  ];
  test.each(ERROR_CASES)(
    "readCarsInput 에러 테스트",
    async (answer, errorMessage) => {
      await errorCheck(answer, errorMessage);
    }
  );

  const PASS_CASES = [
    [["car1,car2,lurgi,tisi"], "car1,car2,lurgi,tisi"],
    [["1,2,3eq"], "1,2,3eq"],
  ];
  test.each(PASS_CASES)(
    "readCarsInput 통과 테스트",
    async (answer, message, type = "pass") => {
      await errorCheck(answer, message, type);
    }
  );
});
