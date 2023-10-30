import getPlayInfo from "../src/getPlayInfo";
import { Console } from "@woowacourse/mission-utils";

// Console 메서드 모의
Console.readLineAsync = jest.fn();

describe("getPlayInfo", () => {
  test("참가자 이름 및 시도 횟수 정상 입력 확인", async () => {
    // given: 사용자의 입력을 모의
    Console.readLineAsync
      .mockResolvedValueOnce("car1,car2,car3")
      .mockResolvedValueOnce("5");

    // when
    const result = await getPlayInfo();

    // then: 반환값 확인
    expect(result).toEqual([["car1", "car2", "car3"], "5"]);
  });

  test("이름에 대한 예외 처리", async () => {
    // given: 사용자의 입력을 모의
    Console.readLineAsync
      .mockResolvedValueOnce("longName,car2,car3")
      .mockResolvedValueOnce("5");

    // expect: 에러 발생 예상
    await expect(getPlayInfo()).rejects.toThrow(
      "[ERROR] 이름은 5자 이하만 가능합니다."
    );
  });
  test("시도 횟수에 문자열 들어갔을 때 예외 처리", async () => {
    // given: 사용자의 입력을 모의
    Console.readLineAsync
      .mockResolvedValueOnce("car1,car2,car3")
      .mockResolvedValueOnce("5-3");

    // expect: 에러 발생 예상
    await expect(getPlayInfo()).rejects.toThrow(
      "[ERROR] 시도 횟수 입력은 숫자만 가능합니다."
    );
  });
  test("시도 횟수를 입력안하였을 때 예외 처리", async () => {
    // given: 사용자의 입력을 모의
    Console.readLineAsync
      .mockResolvedValueOnce("car1,car2,car3")
      .mockResolvedValueOnce("");

    // expect: 에러 발생 예상
    await expect(getPlayInfo()).rejects.toThrow(
      "[ERROR] 시도 횟수 입력은 숫자만 가능합니다."
    );
  });
});
