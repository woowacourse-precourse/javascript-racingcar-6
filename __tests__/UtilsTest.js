import Utils from "../src/Utils";

describe("Utils 클래스 테스트", () => {
  test("쉼표(,)로 구분된 자동차명을 입력받으면 공백을 제거하고 자동차명을 원소로 갖는 배열로 만든다.", () => {
    const inputs = [
      "qwer,asdf,zxcv",
      "qwer, asdf, zxcv",
      " qwer, asdf , zxcv ",
    ];

    const output = ["qwer", "asdf", "zxcv"];

    inputs.forEach((input) => {
      const cars = Utils.getCarNameArray(input);

      expect(cars).toEqual(output);
    });
  });
});
