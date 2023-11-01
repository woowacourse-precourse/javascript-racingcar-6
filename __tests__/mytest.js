import App from "../src/App.js";

const app = new App();

describe("내가맘든 자동차 경주 게임 테스트", () => {

  test("validChedkAboutNumber가 유효한 숫자 형식이 아닐 때 throw하는지 테스트", () => {
    const input = "dnda";
    expect(() => {app.validCheckAboutNumber(Number(input))}).toThrow("[ERROR]");
  });

  test("validChedkAboutNumber 숫자가 0보다 작은 값일 때 throw하는지 테스트", () => {
    const input = -1;
    expect(() => {app.validCheckAboutNumber(input)}).toThrow("[ERROR]");
  })

  test("checkNamelength가 유효하지 않은 길이의 이름에만 true를 반환하는지 테스트", () => {
    const input1 = ['gaga', 'nana', 'dada'];
    const result1 = app.checkNamelength(input1);
    expect(result1).toEqual(false);
  })

  test("checkNamelength가 유효하지 않은 길이의 이름에만 true를 반환하는지 테스트", () => {
    const input2 = ['gaga', 'nanana', 'dada'];
    const result2 = app.checkNamelength(input2);
    expect(result2).toEqual(true);
  })

  test("이름 중복 테스트", () => {
    const input = ['abc', 'abc'];
    expect(() => {app.validCheckAboutCarName(input)}).toThrow("[ERROR]");
  });

  test("우승자 확인 테스트", () => {
    const input1 = ['gaga', 'nana', 'dada', 'baba'];
    const input2 = ['---', '--', '---', '-'];
    const result = ['gaga', 'dada'];

    expect(app.resultOfWinner(input1, input2)).toEqual(result);
  })

});