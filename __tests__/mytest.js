import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("내가맘든 자동차 경주 게임 테스트", () => {
  test("이름 중복 테스트", () => {
    const input = ['abc', 'abc']
    const app = new App();
    expect(() => {app.validCheckAboutCarName(input)}).toThrow("[ERROR]");
  });

  test("우승자 확인 테스트", () => {
    const input1 = ['gaga', 'nana', 'dada', 'baba'];
    const input2 = ['---', '--', '---', '-'];
    const result = ['gaga', 'dada'];
    const app = new App();
    expect(app.resultOfWinner(input1, input2)).toEqual(result);
  })

});