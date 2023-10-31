/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { Console } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe("함수별 기능 테스트", () => {
  test("경주차 생성자 만드는 함수에 대한 테스트", () => {
    const input = ["abc","def","ghi"];
    const app = new App();
    const result = `${app.makeCars(input)}`;
    expect(result).toContain("object Object"); 
  });

  test("경주차 이름 예외 처리 테스트", () => {
    const inputs = ["", "abc,defghij","abc,,defg","abc","abc,de,de,fg"];
    const app = new App();
    for (let i = 0; i < inputs.length; i += 1) {
      mockQuestions(inputs[i]);
      expect(app.inputCarNames()).rejects.toThrow("[ERROR]");
    }
  });

  test("시도 횟수 입력 예외 처리 테스트", async() => {
    const input = "a";
    const app = new App();
    mockQuestions(input);
    await expect(app.inputTryTimes()).rejects.toThrow("[ERROR]");
  });
  
  test("각 경주차마다 랜덤수 부여하는 함수에 대한 테스트", () => {
    const app = new App();
    const car = app.makeCars(["a"]);
    for (let i = 0; i < 100; i += 1) {
      app.getEachCarsRandomNumber(car);
      expect(car[0].randomNumber >= 0 && car[0].randomNumber < 10).toBeTruthy();
    } 
  });
})