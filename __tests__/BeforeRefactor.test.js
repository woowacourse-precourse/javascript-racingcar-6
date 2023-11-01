import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils"
import { Random } from "@woowacourse/mission-utils"

const mockInput = (input) => {
  Console.readLineAsync = jest.fn(() => Promise.resolve(input));
};

describe("App class", () => {
  describe("getCarName method", () => {
    test("사용자 입력", async () => {
      const testInput = "pobi,woni,jun";
      mockInput(testInput);

      const app = new App();
      const result = await app.getCarName();

      expect(Console.readLineAsync).toHaveBeenCalledTimes(1);
      expect(Console.readLineAsync).toHaveBeenCalledWith("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      expect(result).toEqual(["pobi", "woni", "jun"]); 
    });
  });

  describe("sanitizeCarName method", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    test("이름 사이에 공백이 없을 때", () => {
      const input = "pobi,woni,jun";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "woni", "jun"]);
    });

    test("이름 앞뒤에 공백이 있을 때", () => {
      const input = " pobi ,woni , jun ";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "woni", "jun"]);
    });

    test("공백만 있는 이름이 있을 때", () => {
      const input = "pobi, , jun";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "jun"]);
    });

    test("연속적으로 여러 개의 콤마가 나올 때", () => {
      const input = "pobi,,,woni,,jun";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "woni", "jun"]);
    });
  });

  describe("Error Handling in validateCarName", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    test("자동차 이름이 5자를 초과할 때", async () => {
      mockInput("pobipobi,woni,jun");
      await expect(app.getCarName()).rejects.toThrow("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
    });

    test("자동차 이름이 중복될 때", async () => {
      mockInput("pobi,pobi,jun");
      await expect(app.getCarName()).rejects.toThrow("[ERROR] 중복되는 자동차 이름이 있습니다.");
    });

    test("자동차 이름이 최소 2대 미만일 때", async () => {
      mockInput("pobi");
      await expect(app.getCarName()).rejects.toThrow("[ERROR] 최소 두 대 이상의 자동차 이름을 입력해주세요.");
    });
  });

  describe("getRound method", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    test("사용자로부터 시도할 횟수 입력 받기", async () => {
      const testInput = "5";
      mockInput(testInput);
      
      const result = await app.getRoundNumber();

      expect(Console.readLineAsync).toHaveBeenCalledWith("시도할 횟수는 몇 회인가요?\n");
      expect(result).toBe(5);
    });
  });

  describe("sanitizeRoundNumber method", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    test("숫자에 공백이 없을 때", () => {
      const input = "3";
      const result = app.sanitizeRoundNumber(input);
      expect(result).toEqual(3);
    });

    test("앞뒤에 공백이 있을 때", () => {
      const input = " 3  ";
      const result = app.sanitizeRoundNumber(input);
      expect(result).toEqual(3);
    });

    test("숫자 사이에 공백이 있을 때", () => {
      const input = "1 0";
      const result = app.sanitizeRoundNumber(input);
      expect(result).toEqual(10);
    });
  });

  describe("Error Handling in validateRound", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });
  
    test("시도 횟수가 1 미만일 때", async () => {
      mockInput("0");
      await expect(app.getRoundNumber()).rejects.toThrow("[ERROR] 최소 1 이상의 횟수를 입력해주세요.");
    });
  
    test("시도 횟수가 10 초과일 때", async () => {
      mockInput("11");
      await expect(app.getRoundNumber()).rejects.toThrow("[ERROR] 최대 10 이하의 횟수를 입력해주세요.");
    });
  
    test("시도 횟수가 자연수 형식이 아닐 때", async () => {
      mockInput("2.5");
      await expect(app.getRoundNumber()).rejects.toThrow("[ERROR] 횟수는 자연수 형식이어야 합니다");
    });

    test("시도 횟수가 문자일 때", async () => {
      mockInput("삼");
      await expect(app.getRoundNumber()).rejects.toThrow("[ERROR] 횟수는 자연수 형식이어야 합니다");
    });
  });
  
  describe("makeCar method", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    test("자동차 생성하기", () => {
      const carName = ["pobi", "woni", "jun"];
      app.makeCar(carName);

      expect(app.car).toEqual([
        { name: "pobi", distance: 0, move: expect.any(Function), shouldMove: expect.any(Function) },
        { name: "woni", distance: 0, move: expect.any(Function), shouldMove: expect.any(Function) },
        { name: "jun", distance: 0, move: expect.any(Function), shouldMove: expect.any(Function) }
      ]);
    });
  });

  describe("getRandomNumber method", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });
  
    test("0 ~ 9 사이 무작위 값 생성 테스트", () => {
      const results = new Set();
  
      for (let i = 0; i < 100; i++) {
        const randomValue = app.getRandomNumber();
        results.add(randomValue);
        
        expect(randomValue).toBeGreaterThanOrEqual(0);
        expect(randomValue).toBeLessThanOrEqual(9);
      }
  
      expect(results.size).toBe(10);
    });
  });
  
  describe("makeCar method movement test", () => {
    let app;
    let car;
    beforeEach(() => {
        app = new App();
        const carName = ["testCar"];
        app.makeCar(carName);
        car = app.car[0];
    });

    test("랜덤 숫자가 4 이상이면 전진", () => {
      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(4);
      expect(car.shouldMove()).toBeTruthy();

      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(5);
      expect(car.shouldMove()).toBeTruthy();

      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(9);
      expect(car.shouldMove()).toBeTruthy(); 
    });

    test("랜덤 숫자가 4 미만이면 정지", () => {
      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(1);
      expect(car.shouldMove()).toBeFalsy();

      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(2);
      expect(car.shouldMove()).toBeFalsy();

      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(3);
      expect(car.shouldMove()).toBeFalsy();
    });
  });
});