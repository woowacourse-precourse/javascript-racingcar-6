import Inspector from "../src/utils/Inspector";

describe("Inspector 객체 검사", () => {
  test("isSplitable, 배열로 변환이 가능한지 검사", () => {
    // 요소가 2개가 안되어서 false, 5글자 넘어서 false
    const inputs = ['12345, ', '12345,123456'];
    const output = false;

    const inspector = new Inspector();

    inputs.forEach(async (input) => {
      const result = await inspector.isSplitable(input);
      expect(result).toEqual(output)
    })
  })

  test("isNumber, 숫자가 아닌 값을 입력하지 않도록 검사", () => {
    const inputs = ['a', '#', '가'];
    const output = false;

    const inspector = new Inspector();

    inputs.forEach(async (input) => {
      const result = await inspector.isSplitable(input);
      expect(result).toEqual(output)
    })
  })
})
