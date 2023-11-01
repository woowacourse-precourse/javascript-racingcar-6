import checkCarName from "../src/checkCarName";

describe("checkcheckCarName", () => {
  test("배열이 아닐 때", () => {
    const carNames = "String";
    expect(checkCarName(carNames)).toBeFalsy();
  });

  test("배열이 비어있을 때", () => {
    const carNames = [];
    expect(checkCarName(carNames)).toBeFalsy();
  });

  test("자동차 이름이 5자 이상인 경우", () => {
    const carNames = ["String"];
    expect(checkCarName(carNames)).toBeFalsy();
  });

  test("중복된 자동차 이름이 있는 경우", () => {
    const carNames = ["alpha", "beta", "alpha"];
    expect(checkCarName(carNames)).toBeFalsy();
  });
});
