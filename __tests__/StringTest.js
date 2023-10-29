describe("문자열 테스트", () => {
  test("map, join 함수 테스트", () => {
    const runners = ["11", "22", "33"];
    const scores=[1, 3, 4];
    let race_str=[]
    runners.map((runner, index)=>{
      race_str.push(`${runner} : ${"-".repeat(scores[index])}`);
    })
    console.log(race_str.join('\n'));
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
});
