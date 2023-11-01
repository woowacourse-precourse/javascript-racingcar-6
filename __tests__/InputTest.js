import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("문자열 테스트", () => {
  // split ','로 구분
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "pobi,woni,java";
    const result = input.split(",");
    expect(result).toContain("pobi", "woni", "java");
    expect(result).toContainEqual("java", "woni", "pobi");
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
    const input = "pobi";
    const result = input.split(",");
    expect(result).toContain("pobi");
  });

  // 자동차 이름 유효성 검사
  test.each([[[""]]])("자동차 이름이 아무것도 입력되지 않았을 경우", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.InputName()).rejects.toThrow("[ERROR] 자동차 이름을 입력해주세요");
  });

  test.each([[["pobi, woni,java"]], [["pobi,woni,ja va"]], [["pobi ,woni,java"]]])("자동차 이름에 띄어쓰기가 있을 경우", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.InputName()).rejects.toThrow("[ERROR] 자동차 이름엔 띄어쓰기가 들어갈 수 없습니다.");
  });

  test.each([[["pobi,,woni,java"]], [["pobi,woni,"]], [[",pobi,woni,java"]]])("쉼표를 잘못 적었을 경우", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.InputName()).rejects.toThrow("[ERROR] 쉼표의 위치를 다시 확인해주세요.");
  });

  test.each([[["pobiwoni,java"]], [["pobiwoni"]], [["pobi,wonijava"]]])("자동차 이름이 5자 초과일 경우", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.InputName()).rejects.toThrow("[ERROR] 자동차 이름은 5자 이하로만 입력해주세요.");
  });

  test.each([[["pobi,woni,pobi"]], [["a,a,a"]]])("자동차 이름이 중복될 경우", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.InputName()).rejects.toThrow("[ERROR] 자동차 이름은 중복될 수 없습니다.");
  });

  // 횟수 유효성 검사
  test.each([[["0"]], [["4.5"]], [["a"]], [["1 2"]]])("횟수가 0 이하거나 정수가 아닐 경우 예외 처리", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.InputNumber()).rejects.toThrow("[ERROR] 횟수는 1이상의 정수만 가능합니다.");
  });
});
