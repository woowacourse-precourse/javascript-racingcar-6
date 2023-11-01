const addOne = (element) => {
  element += 1;
  return element;
};

describe("함수 테스트", () => {
  test("forEach 메서드로 각 원소에 1 더하기", () => {
    const input = [1,2,3];
    input.forEach(addOne);

    expect(input).toContainEqual(2,3,4);
  });

  test("for문 내에서 변수 사용 시 정상적으로 기능", () => {
    const input = 4;
    let result = 0;
    for (var i = 0; i < input; i ++) {
      result += 1;
    }

    expect(result).toEqual(4);
  });

  test("정규식과 repeat함수 연결하기", () => {
    const input1 = "poby"
    const input2 = 4
    const str = "-"
    const result = `${ input1 } : ` + str.repeat(input2);

    expect(result).toEqual("poby : ----");
  });

  test("정규식으로 위의 결과 만들기", () => {
    const input1 = "poby"
    const input2 = 4
    const str = "-"
    const result = `${ input1 } : ${ str.repeat(input2) }`;

    expect(result).toEqual("poby : ----");
  });
});

