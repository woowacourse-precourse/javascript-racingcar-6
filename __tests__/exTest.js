import Car from "../src/Car";
import App from "../src/App";

describe("문자열 테스트", () => {
  test("Test the entered car name", () => {
    const carNameList = "pobi,woni,jun";
    const result = carNameList.split(",");
    expect(result).toEqual(["pobi", "woni", "jun"]);
  });

  test("자동차 전진 체크", () => {
    const car = new Car("car");
    car.tryAdvance();
    car.tryAdvance();
    car.tryAdvance();
    car.tryAdvance();
    car.tryAdvance();
    car.tryAdvance();
    car.tryAdvance();
    console.log(car.getMovedDistance());
    expect(car.getMovedDistance()).toEqual(expect.stringMatching(/^-+$/));
  });

  test("자동차 이름 에외 처리 테스트", () => {
    const app = new App();
    const carNameList = ["pobiwoni", "jun"];
    expect(() => app.makingCar(carNameList)).toThrow("[ERROR]");
  });

  test("자동차 이름 에외 처리 테스트", () => {
    const app = new App();
    const carNameList = [" ", "jun"];
    expect(() => app.makingCar(carNameList)).toThrow("[ERROR]");
  });

  test("자동차 이름 에외 처리 테스트", () => {
    const app = new App();
    const carNameList = ["1234", "jun"];
    expect(() => app.makingCar(carNameList)).toThrow("[ERROR]");
  });

  test("자동차 이름 에외 처리 테스트", () => {
    const app = new App();
    const carNameList = [""];
    expect(() => app.makingCar(carNameList)).toThrow("[ERROR]");
  });

  // toBe는 배열이나 객체에서의 참조가 동일한지 확인함, 하지만 split처럼 배열이나 객체의 내용을 비교하라면
  //  toEqual 또는 toStrictEqual을 사용해야 한다.
  test('Splitting "1,2" should result in an array [1, 2]', () => {
    const inputString = "1,2";
    const resultArray = inputString.split(",");

    expect(resultArray).toEqual(["1", "2"]);
  });
});
