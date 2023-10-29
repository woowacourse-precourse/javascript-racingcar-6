import playerRegistration from "../src/playerRegistration";

describe("자동차 경주 게임", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "pobi,woni";
    const result = input.split(",");

    expect(result).toContain("pobi", "woni");
    expect(result).toContainEqual("pobi", "woni");
  });
  test("플레이어의 이름이 5자리 초과할 경우", () => {
    const longString = "aaaaaa";
    expect(() => {
      playerRegistration(longString).toThrow("[ERROR] 입력은 최대 5글자까지");
    });
  });
  test("플레이어의 이름이 5자리를 초과하지 않을 경우", () => {
    const shortString = "aaaaa";
    expect(() => {
      playerRegistration(shortString).not.toThrow();
    });
  });
});
