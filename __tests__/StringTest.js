import App from "../src/App.js";

describe("함수 테스트", () => {
  const app = new App();

  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2";
    const result = app.splitUserInputByComma(input);

    expect(result).toContain("2", "1");
    expect(result).toContainEqual("1", "2");
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
    const input = "1";
    const result = app.splitUserInputByComma(input);

    expect(result).toContain("1");
  });

  test("1글자 미만 이름에 대한 예외처리", async () => {
    const inputs = ["one,,three", "", ",two,three"];

    inputs.forEach((userInputNames) => {
      const userNames = app.splitUserInputByComma(userInputNames);

      try {
        app.checkNameLength(userNames);
      } catch(err) {
        expect(err.message).toContain("[ERROR]");
      }
    })
  })

  test("자연수가 아닌 수에 대한 예외처리", () => {
    const inputs = ["0.1", "-1", "0"];

    inputs.forEach((userInputGameRep) => {
      try {
        app.stringToNaturalNumber(userInputGameRep);
      } catch(err) {
        expect(err.message).toContain('[ERROR]');
      }
    })
  })

  test("substring 메서드로 특정 구간 값을 반환", () => {
    const input = "(1,2)";
    const result = input.substring(1, 4);

    expect(result).toEqual("1,2");
  });

  test("at 메서드로 특정 위치의 문자 찾기", () => {
    const input = "abc";
    const result = input.at(0)

    expect(result).toEqual("a");
  });
});
