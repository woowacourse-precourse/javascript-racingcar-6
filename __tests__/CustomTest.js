function spaceTest(input) {
  const result = input.split(",");
  result.forEach((element) => {
    if (element.includes(" "))
      throw new Error("[ERROR] 띄어쓰기는 허용되지 않습니다.");
  });

  return result;
}

function nameLengthTest(input) {
  const result = input.split(",");
  result.forEach((element) => {
    if (element.length > 5)
      throw new Error("[ERROR] 멤버는 영,숫자 5자까지 가능합니다.");
  });

  return result;
}

function tryValidation(input) {
  const regex = /^[0-9]/;
  const result = regex.test(input);
  if (!result) throw new Error("[ERROR] 숫자 형식의 입력만 가능합니다.");
  return input;
}

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
  test("띄어쓰기 포함 여부", async () => {
    const input = "qwer, asdf,zxcv";

    expect(() => spaceTest(input)).toThrow();
  });
  test("이름 최대길이(5글자) 검사", async () => {
    const input = "qwer,asdf,zxcvzxcv";

    expect(() => nameLengthTest(input)).toThrow();
  });
  test("시도 횟수 유효성 검사", async () => {
    const input = "aa";

    expect(() => tryValidation(input)).toThrow();
  });
});
