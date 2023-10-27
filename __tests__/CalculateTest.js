import Calculate from "../src/Calculate";

const inputs = [
  ["qwer", "---"],
  ["asdf", "--"],
  ["zxcv", "---"],
];

describe("Calculate 클래스 테스트", () => {
  test("자동차명과 최종 결과를 입력받아 경주 결과를 갱신한다.", () => {
    const calculate = new Calculate();

    inputs.forEach((input) => {
      const [name, finalResult] = input;
      calculate.calcWinners(name, finalResult);
    });

    expect(calculate.getWinners()).toBe("qwer, zxcv");
  });
});
