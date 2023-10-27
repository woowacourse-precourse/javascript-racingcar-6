import { ERROR } from "../src/utils/Constant.js";
import { Validation } from "../src/utils/Validation.js";

describe("자동차 이름 입력 테스트", () => {
  // Correct Test
  test("자동차 이름이 하나만 주어졌을 경우", () => {
    const input = "name1";
    const result = input.split(",");
    expect(result).toContain("name1");
  });
  
  test("자동차 이름이 여러 개 주어졌을 경우", () => {
    const input = "name1,name2,name3";
    const result = input.split(",");
    expect(result).toContain("name3","name2","name1");
    expect(result).toContainEqual("name1","name2","name3");
  });

  test("자동차 이름이 중복된 경우", () => {
    const input = "name1,name2,name1";
    const result = input.split(",");
    expect(result).toContainEqual("name1","name2","name1");
  })

  // Error Test
  test("구분자로 시작된 경우", () => {
    const input = ",name1";
    const result = input.split(",");
    expect(Validation.carNameValidation(result)).rejects.toThrow("[ERROR]");
  });

  test("구분자로 끝난 경우", () => {
    const input = "name1,";
    const result = input.split(",");
    expect(Validation.carNameValidation(result)).rejects.toThrow("[ERROR]");
  });

  test("빈 값이 주어진 경우", () => {
    const input = "";
    const result = input.split(",");
    expect(Validation.carNameValidation(result)).rejects.toThrow("[ERROR]");
  });

  test("이름의 길이가 5 초과인 경우", () => {
    const input = "name1, name12, name4";
    const result = input.split(',');
    expect(Validation.carNameValidation(result)).rejects.toThrow("[ERROR]");
  });

  test("이름 안에 띄어쓰기가 있는 경우", () => {
    const input = "name1 ,name2,name3";
    const result = input.split(",");
    expect(Validation.carNameValidation(result)).rejects.toThrow("[ERROR]");
  });
})