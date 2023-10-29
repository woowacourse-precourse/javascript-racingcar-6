describe("사용자 입력 테스트", () => {
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
})