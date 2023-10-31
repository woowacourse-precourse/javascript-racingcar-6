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

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("함수별 기능 테스트", () => {
  test("경주차 생성자 만드는 함수(makeCars(cars))에 대한 테스트", () => {
    const input = ["abc","def","ghi"];
    const app = new App();
    const result = `${app.makeCars(input)}`;
    expect(result).toContain("object Object"); 
  });
});
