function carNameLengthTest(input) {
  const result = input.split(',');
  result.forEach(item => {
    if (item.length > 5) {
      throw new Error("[ERROR] 이름은 5글자 이하로 작성해주세요")
    }
  })
  return result;
}
describe("입력 테스트", () => {
  test("입력값 길이 테스트", async () => {
    const INPUT = "a,b,qazwsx";

    expect(() => carNameLengthTest(INPUT)).toThrow();
  })
})