describe("정상 동작 테스트", () => {
  test("주어진 값 구분", async () => {
    const input = "qwer,asdf,zxcv";
    const result = input.split(",");

    expect(result).toContain("qwer", "zxcv", "asdf");
    expect(result).toContain("asdf", "qwer", "zxcv");
    expect(result).toContain("asdf", "zxcv", "qwer");
    expect(result).toContain("zxcv", "asdf", "qwer");
    expect(result).toContain("zxcv", "qwer", "asdf");
    expect(result).toContainEqual("qwer", "asdf", "zxcv");
  });
});
