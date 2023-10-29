describe("문자열 테스트", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2";
    const result = input.split(",");

    expect(result).toContain("2", "1"); // 배열에 문자열이 포함되어 있는지 확인
    expect(result).toContainEqual("1", "2"); // 배열에 문자열이 포함되어 있고, 순서도 같은지 확인
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
    const input = "1";
    const result = input.split(",");

    expect(result).toContain("1"); // 테스트 값과 기대하는 값이 일치하는지 확인
  });


  test("substring 메서드로 특정 구간 값을 반환", func1)


  test("substring 메서드로 특정 구간 값을 반환", () => {
    const input = "(1,2)";
    const result = input.substring(1, 4); // '(1,2)'를 1번 인덱스부터 4번까지 잘라내기 (4번 인덱스는 포함하지 않는다.) -> '1,2'

    expect(result).toEqual("1,2"); // result 결과가 '1,2'일 것 같은데, 정말 '1,2'가 맞는지 확인하기
    // toEqual은 문자열이 같은지 확인하는 것 같다!
  });

  test("at 메서드로 특정 위치의 문자 찾기", () => {
    const input = "abc";
    const result = input.at(0)

    expect(result).toEqual("a");
  });

  test("1 + 1 = 2 일까?", () => {
    let a = 1;
    let b = 1;
    let result = a + b;
    expect(result).toEqual(2);
  })

});

function func1() {
  const input = "(1,2)";
  const result = input.substring(1, 4); // '(1,2)'를 1번 인덱스부터 4번까지 잘라내기 (4번 인덱스는 포함하지 않는다.) -> '1,2'

  expect(result).toEqual("1,2"); // result 결과가 '1,2'일 것 같은데, 정말 '1,2'가 맞는지 확인하기
  // toEqual은 문자열이 같은지 확인하는 것 같다!
}