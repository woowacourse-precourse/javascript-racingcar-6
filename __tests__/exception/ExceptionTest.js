import Exception from "../../src/exception/exception";

describe("예외처리 테스트", () => {
  test("자동차 이름 입력 성공", async () => {
    //given
    const input = "pobi,woni,jun";

    //when
    Exception.carNames(input);

    //then
    console.log("no error!");
  });

  test("자동차 이름 없음 에러", async () => {
    //given
    const input = "pobi,woni,";

    //when, then
    expect(() => Exception.carNames(input)).toThrow(
      "[ERROR] 이름이 없는 자동차가 있습니다."
    );
  });

  test("자동차 이름 5자 이상 에러", async () => {
    //given
    const input = "pobi,woni,jenjenjen";

    //when, then
    expect(() => Exception.carNames(input)).toThrow(
      "[ERROR] 이름은 5자 이하여야 합니다."
    );
  });

  test("시도 횟수 입력 성공", async () => {
    //given
    const input = "4";

    //when
    Exception.attemptNumber(input);

    //then
    console.log("no error!");
  });

  test("시도 횟수 숫자 아님 에러", async () => {
    //given
    const input = "q";

    //when, then
    expect(() => Exception.attemptNumber(input)).toThrow(
      "[ERROR] 1이상의 숫자값을 입력해주세요."
    );
  });

  test("시도 횟수 0 에러", async () => {
    //given
    const input = "0";

    //when, then
    expect(() => Exception.attemptNumber(input)).toThrow(
      "[ERROR] 1이상의 숫자값을 입력해주세요."
    );
  });
});
