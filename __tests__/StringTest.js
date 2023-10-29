import App from "../src/App.js";

describe("문자열 테스트", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2";
    const result = input.split(",");

    expect(result).toContain("2", "1");
    expect(result).toContainEqual("1", "2");
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
    const result = input.at(0);

    expect(result).toEqual("a");
  });
});


// describe("함수 별 유닛 테스트", () => {
//   test.each(["", ",", ",asdf", "qwer,ds,", "qwer,,d"])(
//     "자동차 이름 미입력",
//     (inputs) => {
//       expect(App.checkCar(inputs)).toThrow("[ERROR] 이름이 없는 자동차가 있습니다.")
//     }
//   );
// });
