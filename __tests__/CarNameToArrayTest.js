import carNameToArray from "./functions/carNameToArray.js";

describe("문자열 배열로 분리하기 테스트", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "pobi,woni";
    const result = carNameToArray(input);

    expect(result).toContain("woni", "pobi");
    expect(result).toContainEqual("pobi", "woni");
  });

  test("5글자를 초과하는 이름이 입력됐을 때 예외 발생", () => {
    const input = "pobi,woni,junjun";
    const result = carNameToArray(input);

    expect(result).toThrow(`[ERROR] 각 자동차의 이름은 0 ~ 5자 사이로 입력해야 합니다.`);
  });

  test("0글자 이름이 입력됐을 때 예외 발생", () => {
    const input = "pobi,,jun";
    const result = carNameToArray(input);

    expect(result).toThrow(`[ERROR] 각 자동차의 이름은 0 ~ 5자 사이로 입력해야 합니다.`);
  });
});
