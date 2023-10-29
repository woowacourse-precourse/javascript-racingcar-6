import { isValidName, isValidTryCount } from "../src/user/validation";

describe("문자열 테스트", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2";
    const result = input.split(",");

    expect(result).toContain("2", "1");
    expect(result).toContainEqual("1", "2");
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
    const input = "1";
    const result = input.split(",");

    expect(result).toContain("1");
  });

  test("substring 메서드로 특정 구간 값을 반환", () => {
    const input = "(1,2)";
    const result = input.substring(1, 4);

    expect(result).toEqual("1,2");
  });

  test("at 메서드로 특정 위치의 문자 찾기", () => {
    const input = "abc";
    const result = input.at(0)

    expect(result).toEqual("a");
  });

  test("split 메서드로 입력한 이름 값 구분하기", () => {
    const input = "pobi,woni,jun";
    const result = input.split(",");

    expect(result).toContain("jun", "woni", "pobi");
    expect(result).toContainEqual("pobi", "woni", "jun");
  });

  test("문자열로 받은 값을 , 단위로 나누고 각 5자 이하인지 체크", () => {
    const input = "pobi,woni,jun";
    const splitInput = input.split(",");
    let result = "";
    for (const value of splitInput) {
      if (value.length > 5) { result = "No"; break; }
      else { result = "Yes"; }
    }

    expect(result).toEqual("Yes");
  });

  test(", 단위로 나눈 문자열 갯수만큼 배열 선언 및 초기화 검사", () => {
    const input = ["pobi", "woni", "jun"];
    const saveGameProcess = new Array(input.length).fill("");

    expect(saveGameProcess).toEqual(["", "", ""]);
  });

  test("입력한 이름 값이 5자 이하 검사하기", () => {
    const input = ["pobi", "woni", "jun"];
    let result = "";
    for (const value of input) {
      if (value.length > 5) { result = "No"; break; }
      else { result = "Yes"; }
    }

    expect(result).toEqual("Yes");
  });

  test("자동차 이름 5자 이하 검사", () => {
    try {
      isValidName(["may", "june", "july", "august"]);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toEqual("[ERROR] 이름은 5자 이하만 가능합니다.");
    }
  });

  test("시도 횟수 값 숫자일 때, True 검사", () => {
    try {
      isValidTryCount("5");
      expect(true).toBe(true);
    } catch (error) {
      expect(error.message).toEqual("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  });

  test("시도 횟수 값 문자일 때, False 검사", () => {
    try {
      isValidTryCount("abc");
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toEqual("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  });
});
