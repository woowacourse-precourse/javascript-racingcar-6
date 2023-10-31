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

  test("charAt 메서드로 특정 인덱스 위치의 문자 찾기", () => {
    const input = "abc";
    const result = input.charAt(1);
  
    expect(result).toEqual("b");
  });

  test("slice 메서드로 특정 구간의 문자열 반환", () => {
    const input = "JavaScript";
    const result = input.slice(0, 4);

    expect(result).toEqual("Java");
  });

  test("indexOf 메서드로 특정 문자 또는 부분 문자열의 인덱스 찾기", () => {
    const input = "JavaScript";
    const result = input.indexOf("Java");

    expect(result).toEqual(0);
  });

  test("replace 메서드로 특정 문자열 대체", () => {
    const input = "Java";
    const result = input.replace("Java", "JavaScript");

    expect(result).toEqual("JavaScript");
  });

  test("toUpperCase 메서드로 문자열을 대문자로 변환", () => {
    const input = "java";
    const result = input.toUpperCase();

    expect(result).toEqual("JAVA");
  });

  test("toLowerCase 메서드로 문자열을 소문자로 변환", () => {
    const input = "JAVA";
    const result = input.toLowerCase();

    expect(result).toEqual("java");
  });

  test("trim 메서드로 문자열 앞뒤 공백 제거", () => {
    const input = "  abcd  ";
    const result = input.trim();

    expect(result).toEqual("abcd");
  });

  test("startsWith 메서드로 문자열이 특정 접두사로 시작하는지 확인", () => {
    const input = "Javascript!";
    const result = input.startsWith("Java");

    expect(result).toBeTruthy();
  });

  test("endsWith 메서드로 문자열이 특정 접미사로 끝나는지 확인", () => {
    const input = "Javascript";
    const result = input.endsWith("script");

    expect(result).toBeTruthy();
  });
});
