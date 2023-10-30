import { mockQuestions } from "../../src/utils/testUtils";
import carHandler from "../../src/handler/carHandler";

const ERROR_MESSAGES = {
  NOT_SPACE: "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다.",
  NOT_OVER_5: "[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다.",
  NOT_DUPLICATION: "[ERROR] 자동차 이름에 중복이 있습니다.",
};

async function errorCheck(answer, message) {
  mockQuestions(answer);
  await expect(carHandler.readCarsInput()).rejects.toThrow(message);
}

describe("carHandler 테스트", () => {
  test("readCarsInput 공백 에러", async () => {
    const answer = [" car,car34,car1"];
    await errorCheck(answer, ERROR_MESSAGES.NOT_SPACE);
  });

  test("readCarsInput 길이 에러 ", async () => {
    const answer = ["carcar,car34,car1"];
    await errorCheck(answer, ERROR_MESSAGES.NOT_OVER_5);
  });

  test("readCarsInput 중복 에러", async () => {
    const answer = ["carca,carca,car1"];
    await errorCheck(answer, ERROR_MESSAGES.NOT_DUPLICATION);
  });

  test("readCarsInput 통과 테스트", async () => {
    const answer = ["car1,car2,lurgi,tisi"];
    mockQuestions(answer);

    const cars = await carHandler.readCarsInput();
    expect(cars).toEqual("car1,car2,lurgi,tisi");
  });
});
