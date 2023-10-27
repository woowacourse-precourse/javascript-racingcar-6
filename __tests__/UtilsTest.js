import Utils from "../src/Utils";
import Car from "../src/Car";

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

  test("자동차명 배열을 입력받아 각각의 인스턴스를 생성하여 배열을 반환한다.", () => {
    const input = ["qwer", "asdf", "zxcv"];

    const output = [new Car("qwer"), new Car("asdf"), new Car("zxcv")];

    const instanceArray = Utils.getEachCarInstanceArray(input);

    expect(instanceArray).toEqual(output);
  });
});
