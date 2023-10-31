import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "../src/Validation/Validation.js";
import CONSTANTS from "../src/Constants/Constants.js";
import CarRacingModel from "../src/Model/CarRacingModel.js";
import CarRacingView from "../src/View/CarRacingView.js";
import CarRacingController from "../src/Controller/CarRacingController.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]], [["pobi,pobi"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );

  test.each([
    ["string"],
    [{ key: "value" }],
    [() => {}],
    [undefined],
    [["this", "is", "array"]],
    [-1],
  ])("유효하지 않은 숫자에 대한 예외 처리", async (inputs) => {
    const validation = new Validation();
    await expect(() => validation.isValidTrialNumber(inputs)).toThrow(
      CONSTANTS.ERROR.ISNUMBER
    );
  });

  test("moveOrStay 함수", () => {
    const randoms = [8, 2];
    mockRandoms(randoms);

    const carRacingController = new CarRacingController();
    carRacingController.carRacingModel.setCarData("car1,car2");

    carRacingController.carRacingModel.moveOrStay(
      carRacingController.carRacingModel.getCarData()
    );

    expect(carRacingController.carRacingModel.getCarData()).toEqual([
      ["car1", 0],
      ["car2", 1],
    ]);
  });

  test("printResult 함수", () => {
    const carData = [
      ["car1", 3],
      ["car2", 5],
    ];
    const expectedOutput = ["car1 : ---", "car2 : -----"];
    const logSpy = getLogSpy();

    const carRacingView = new CarRacingView();
    carRacingView.printResult(carData);

    expectedOutput.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("printWinner 함수", () => {
    const carData = [
      ["car1", 3],
      ["car2", 5],
      ["car3", 5],
    ];
    const expectedOutput = "car2, car3";
    const logSpy = getLogSpy();

    const carRacingView = new CarRacingView();
    carRacingView.printWinner(carData);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedOutput)
    );
  });

  test("inputCarName 함수", async () => {
    const inputs = ["car1,car2"];
    mockQuestions(inputs);

    const carRacingController = new CarRacingController();
    await carRacingController.inputCarName();

    expect(carRacingController.carRacingModel.getCarData()).toEqual([
      ["car1", 0],
      ["car2", 0],
    ]);
  });

  test("inputTrialNumber 함수", async () => {
    const inputs = [5];
    mockQuestions(inputs);

    const carRacingController = new CarRacingController();
    await carRacingController.inputTrialNumber();

    expect(carRacingController.carRacingModel.getTrialNumber()).toBe(5);
  });
});
