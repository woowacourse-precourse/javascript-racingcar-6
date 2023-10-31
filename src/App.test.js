import App from "./App";

describe("App", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe("addCar", () => {
    test("자동차 이름 입력", () => {
      app.addCar("car1,car2,car3");
      expect(app.CAR_NAMES).toEqual([
        { name: "car1", position: 0 },
        { name: "car2", position: 0 },
        { name: "car3", position: 0 },
      ]);
    });

    test("에러 발생", () => {
      expect(() => app.addCar("car1,car2,car345")).toThrowError(
        "[ERROR] 숫자가 잘못된 형식입니다."
      );
    });
  });

  describe("MOVE_CAR", () => {
    test("자동차 이동 조건", () => {
      const car = { name: "car1", position: 0 };
      app.MOVE_CAR(car);
      expect(car.position).toBeGreaterThanOrEqual(0);
    });
  });

  describe("printRoundResults", () => {
    test("라운드 별 결과", () => {
      const carName = "carName"; // carName 변수를 정의하고 원하는 이름을 할당
      const car = { name: carName, position: 3 };
      const expectedResult = `${car.name} : ${"-".repeat(car.position)}\n`;
      const result = app.printRoundResults();
      expect(result).toEqual(expectedResult);
    });
  });

  describe("inputNumber", () => {
    test("시도할 횟수", async () => {
      jest.spyOn(app, "inputNumber").mockResolvedValue(5);
      const result = await app.inputNumber();
      expect(result).toBe(5);
    });
  });

  describe("inputCarNames", () => {
    test("자동차 이름 입력", async () => {
      jest.spyOn(app, "inputCarNames").mockResolvedValue("car1,car2");
      const result = await app.inputCarNames();
      expect(result).toBe("car1,car2");
    });
  });

  describe("printWinner", () => {
    test("우승자 출력", () => {
      app.CAR_NAMES = [
        { name: "car1", position: 3 },
        { name: "car2", position: 2 },
        { name: "car3", position: 3 },
      ];
      const consoleSpy = jest.spyOn(console, "log");
      app.printWinner();
      expect(consoleSpy).toHaveBeenCalledWith("최종 우승자 : car1, car3");
    });
  });
});
const app = new App();
app.play();
