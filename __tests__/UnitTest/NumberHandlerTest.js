import { mockQuestions } from "../../src/utils/testUtils";
import numberHandler from "../../src/utils/numberHandler";

describe("NumberHandler 테스트", () => {
  test("readTryNumber 에러1", async () => {
    const answer = ["1e"];
    mockQuestions(answer);

    await expect(numberHandler.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수는 숫자 값만 입력해주세요."
    );
  });
  test("readTryNumber 에러2", async () => {
    const answer = ["1234q"];
    mockQuestions(answer);

    await expect(numberHandler.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수는 숫자 값만 입력해주세요."
    );
  });
  test("readTryNumber 에러3", async () => {
    const answer = [""];
    mockQuestions(answer);

    await expect(numberHandler.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수를 입력하지 않으셨습니다."
    );
  });
  test("readTryNumber 통과", async () => {
    const answer = ["5"];
    mockQuestions(answer);

    const output = await numberHandler.readTryNumber();
    expect(output).toEqual(5);
  });
  test("readTryNumber 통과2", async () => {
    const answer = ["99"];
    mockQuestions(answer);

    const output = await numberHandler.readTryNumber();
    expect(output).toEqual(99);
  });
});
