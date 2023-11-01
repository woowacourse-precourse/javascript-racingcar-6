import { mockQuestions } from "../../src/utils/testUtils/testUtils";
import App from "../../src/App";
import { ERROR_HEADER } from "../../src/App";

describe("레이싱카 입력", () => {
  test("레이싱카 입력 문자열 구분 처리", async () => {
    //given
    const input = ["pobi,woni,jun"];
    mockQuestions(input);
    //when
    const app = new App();
    const racingCars = await app.getCars();
    //then
    await expect(racingCars).toStrictEqual(["pobi", "woni", "jun"]);
  });

  test("레이싱카가 하나일 때 처리", async () => {
    //given
    const input = ["pobi"];
    mockQuestions(input);
    //when
    const app = new App();
    const racingCars = await app.getCars();
    //then
    await expect(racingCars).toStrictEqual(["pobi"]);
  });

  test("빈 입력값에 대한 예외 처리", async () => {
    //given
    const input = [""];
    mockQuestions(input);
    //when
    const app = new App();
    //then
    await expect(app.getCars()).rejects.toThrow(ERROR_HEADER);
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름 길이에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);
      // when
      const app = new App();
      // then
      await expect(app.getCars()).rejects.toThrow(ERROR_HEADER);
    }
  );
});
