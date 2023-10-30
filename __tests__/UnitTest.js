import carHandler from "../src/utils/carHandler";
import numberHandler from "../src/utils/numberHandler";
import resultHandler from "../src/utils/resultHandler";
import Car from "../src/Car";
import { mockQuestions, mockRandoms, getLogSpy } from "../src/utils/testUtils";

describe("유닛 테스트", () => {
  test("readCarsInput 공백 에러", async () => {
    const answer = [" car,car34,car1"];
    mockQuestions(answer);

    await expect(carHandler.readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다."
    );
  });
  test("readCarsInput 길이 에러 ", async () => {
    const answer = ["carcar,car34,car1"];
    mockQuestions(answer);

    await expect(carHandler.readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다."
    );
  });
  test("readCarsInput 중복 에러", async () => {
    const answer = ["carca,carca,car1"];
    mockQuestions(answer);

    await expect(carHandler.readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름에 중복이 있습니다."
    );
  });
  test("readCarsInput 통과 테스트", async () => {
    const answer = ["car1,car2,lurgi,tisi"];
    mockQuestions(answer);

    const cars = await carHandler.readCarsInput();
    expect(cars).toEqual("car1,car2,lurgi,tisi");
  });

  test("readTryNumber 에러1", async () => {
    const answer = ["1e"];
    mockQuestions(answer);

    await expect(numberHandler.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수는 숫자 값만 입력해주세요."
    );
  });
  test("readTryNumber 에러2", async () => {
    const answer = ["1234q"];
    mockQuestions(answer);

    await expect(numberHandler.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수는 숫자 값만 입력해주세요."
    );
  });
  test("readTryNumber 에러3", async () => {
    const answer = [""];
    mockQuestions(answer);

    await expect(numberHandler.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수를 입력하지 않으셨습니다."
    );
  });
  test("readTryNumber 통과", async () => {
    const answer = ["5"];
    mockQuestions(answer);

    const output = await numberHandler.readTryNumber();
    expect(output).toEqual(5);
  });
  test("readTryNumber 통과2", async () => {
    const answer = ["99"];
    mockQuestions(answer);

    const output = await numberHandler.readTryNumber();
    expect(output).toEqual(99);
  });

  test("getResultString 출력 테스트", () => {
    const CAR_NAMES = ["lurgi", "car1", "car2"];
    const CARS = CAR_NAMES.map((carName) => new Car(carName));
    const TRY_NUMBER = 3;

    const MOVING_FORWARD = 4;
    const STOP = 3;
    const RANDOMS = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ];
    mockRandoms(RANDOMS);

    const EXPECT = [
      "lurgi : -",
      "car1 : -",
      "car2 : -",
      "",
      "lurgi : --",
      "car1 : -",
      "car2 : --",
      "",
      "lurgi : ---",
      "car1 : --",
      "car2 : ---",
      "",
      "",
    ];

    const OUTPUT = resultHandler.getResultString({
      tryNumber: TRY_NUMBER,
      cars: CARS,
    });
    expect(OUTPUT.split("\n")).toStrictEqual(EXPECT);
  });
  test("우승자 출력 테스트", () => {
    const CAR_NAMES = ["lurgi", "car1", "car2"];
    const MOVE_FORWARD = [3, 1, 3];
    const CARS = CAR_NAMES.map((carName) => new Car(carName));
    MOVE_FORWARD.forEach((number, index) => {
      for (let i = 0; i < number; i += 1) {
        CARS[index].setDistancePlusOne();
      }
    });

    const logSpy = getLogSpy();
    const OUTPUT = "최종 우승자 : lurgi, car2";

    const WINNER = resultHandler.getWinner(CARS);
    resultHandler.printWinner(WINNER);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(OUTPUT));
  });
});
