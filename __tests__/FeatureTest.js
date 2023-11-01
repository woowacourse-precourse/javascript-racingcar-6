import App from "../src/App.js";
import { isInvalidTryNumber, getRandomNumber, isMovable } from "../src/util.js";
import { Console, Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

describe("어플리케이션 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getCarName", () => {
    it("should set car names correctly", async () => {
      Console.readLineAsync.mockResolvedValue("car1,car2,car3");
      await app.getCarName();
      expect(app.carNames).toEqual(["car1", "car2", "car3"]);
    });

    it("should throw error when car name length is more than 5", async () => {
      Console.readLineAsync.mockResolvedValue("longcarname");
      await expect(app.getCarName()).rejects.toThrow(
        "[ERROR]: 자동차 이름은 5자 이하로 입력해주세요"
      );
    });
  });

  describe("getTryNumber", () => {
    it("should set try number correctly", async () => {
      Console.readLineAsync.mockResolvedValue("5");
      await app.getTryNumber();
      expect(app.tryNumber).toEqual(5);
    });

    it("should throw error when try number is not a number or less than or equal to 0", async () => {
      Console.readLineAsync.mockResolvedValue("notanumber");
      await expect(app.getTryNumber()).rejects.toThrow(
        "[ERROR]: 시도 횟수는 0보다 큰 숫자로 입력해주세요"
      );
    });
  });

  describe("doRace", () => {
    beforeEach(() => {
      app.carNames = ["car1", "car2", "car3"];
      app.racingCounts = { car1: 0, car2: 0, car3: 0 };
      app.tryNumber = 5;
    });

    it("should decrease try number each time", () => {
      const spy = jest.spyOn(app, "decreaseTryNumber");
      app.doRace();
      expect(spy).toHaveBeenCalledTimes(5);
    });
  });

  describe("moveCars", () => {
    beforeEach(() => {
      app.carNames = ["car1", "car2", "car3"];
      app.racingCounts = { car1: 0, car2: 0, car3: 0 };
    });

    it("should call moveCar for each car", () => {
      const spy = jest.spyOn(app, "moveCar");
      app.moveCars();
      expect(spy).toHaveBeenCalledTimes(app.carNames.length);
    });
  });

  describe("moveCar", () => {
    beforeEach(() => {
      app.carNames = ["car1"];
      app.racingCounts = { car1: 0 };
    });

    it("should increase racing count if number is movable", () => {
      Random.pickNumberInRange.mockReturnValue(4);
      app.moveCar("car1");
      expect(app.racingCounts["car1"]).toEqual(1);
    });

    it("should not increase racing count if number is not movable", () => {
      Random.pickNumberInRange.mockReturnValue(3);
      app.moveCar("car1");
      expect(app.racingCounts["car1"]).toEqual(0);
    });
  });

  describe("getWinner", () => {
    beforeEach(() => {
      app.carNames = ["car1", "car2", "car3"];
      app.racingCounts = { car1: 1, car2: 2, car3: 2 };
    });

    it("should return correct winner", () => {
      const winner = app.getWinner();
      expect(winner).toEqual("car2, car3");
    });
  });

  describe("decreaseTryNumber", () => {
    it("should decrease try number by 1", () => {
      app.tryNumber = 5;
      app.decreaseTryNumber();
      expect(app.tryNumber).toEqual(4);
    });
  });

  describe("increaseRacingCountsBy", () => {
    it("should increase racing count by 1", () => {
      app.carNames = ["car1"];
      app.racingCounts = { car1: 0 };
      app.increaseRacingCountsBy("car1");
      expect(app.racingCounts["car1"]).toEqual(1);
    });
  });

  describe("showRacingStatus", () => {
    beforeEach(() => {
      app.carNames = ["car1", "car2", "car3"];
      app.racingCounts = { car1: 1, car2: 2, car3: 3 };
    });

    it("should print racing status correctly", () => {
      const spy = jest.spyOn(Console, "print");
      app.showRacingStatus();

      expect(spy).toHaveBeenCalledTimes(app.carNames.length + 1);
      expect(spy).toHaveBeenNthCalledWith(1, "car1 : -");
      expect(spy).toHaveBeenNthCalledWith(2, "car2 : --");
      expect(spy).toHaveBeenNthCalledWith(3, "car3 : ---");
      expect(spy).toHaveBeenNthCalledWith(4, "");
    });
  });

  describe("getStatus", () => {
    beforeEach(() => {
      app.carNames = ["car1"];
      app.racingCounts = { car1: 1 };
    });

    it("should return correct status", () => {
      const status = app.getStatus("car1");
      expect(status).toEqual("car1 : -");
    });
  });

  describe("isCompletedRace", () => {
    it("should return true if try number is less than or equal to 0", () => {
      app.tryNumber = 0;
      expect(app.isCompletedRace()).toBe(true);

      app.tryNumber = -1;
      expect(app.isCompletedRace()).toBe(true);
    });

    it("should return false if try number is greater than 0", () => {
      app.tryNumber = 1;
      expect(app.isCompletedRace()).toBe(false);
    });
  });
});
