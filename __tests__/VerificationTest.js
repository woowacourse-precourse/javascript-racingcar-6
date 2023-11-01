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

  test("부여받은 랜덤수를 토대로 각 경주차가 전진하는지 여부를 판단하는 함수에 대한 테스트", () => {
    const app = new App();
    for (let i = 0; i < 10; i += 1) {
      const car = app.makeCars(["a"]);
      car[0].randomNumber = i;
      app.getEachCarsMove(car);
      if (car[0].randomNumber >= 4) {
        expect(car[0].move).toContain("-");
        expect(car[0].moveNumber).toEqual(1);
      } 
      else if (car[0].randomNumber < 4) {
        expect(car[0].move).toEqual("");
        expect(car[0].moveNumber).toEqual(0);
      } 
    }
  });

  test("각 라운드마다 경주차 전진 정도를 출력하는 함수에 대한 테스트", () => {
    const app = new App();
    const cars = app.makeCars(["a","b"]);
    const random1 = [5,2,7];
    const random2 = [2,2,5];
    const logSpy = getLogSpy();
    const outputs = ["a : -","b :","a : -","b : -","a : --","b : -"];
    for (let i = 0; i < 3; i += 1) {
      cars[0].randomNumber = random1[i];
      cars[1].randomNumber = random2[i];
      app.getEachCarsMove(cars);
      app.exportEachRoundResults(cars);
    }
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    })
  });

  test.each`
  a          | b          | expected
  ${[5,2,7]} | ${[2,2,5]} | ${"a"}
  ${[1,5,8]} | ${[6,0,4]} | ${"a, b"}
  `("최종 우승자 출력하는 함수에 대한 테스트", ({a, b, expected}) => {
    const app = new App();
    const cars = app.makeCars(["a","b"]);
    for (let i = 0; i < 3; i += 1) {
      cars[0].randomNumber = a[i];
      cars[1].randomNumber = b[i];
      app.getEachCarsMove(cars);
    }
    expect(app.exportWinner(cars)).toBe(expected);
  });
})