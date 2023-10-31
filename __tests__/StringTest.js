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

  test("winner가 한명일 때", () => {
    let winners=["한명"];
    const result =`최종 우승자 : ${winners.join()}`;
    expect(result).toEqual("최종 우승자 : 한명");
  });

  test("winner가 두명 이상일 때", () => {
    let winners=["한명", "두명", "세명"];
    const result =`최종 우승자 : ${winners.join(",")}`;
    expect(result).toEqual("최종 우승자 : 한명,두명,세명");
  });

  test("at 메서드로 특정 위치의 문자 찾기", () => {
    const input = "abc";
    const result = input.at(0)

    expect(result).toEqual("a");
  });
});
