import { MissionUtils } from "@woowacourse/mission-utils";
import CarRace from "../src/CarRace";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("유닛 테스트", () => {
  test("readCarsInput 공백 에러", async () => {
    const answer = [" car,car34,car1"];
    mockQuestions(answer);

    const carRace = new CarRace();
    await expect(carRace.readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다."
    );
  });
  test("readCarsInput 길이 에러 ", async () => {
    const answer = ["carcar,car34,car1"];
    mockQuestions(answer);

    const carRace = new CarRace();
    await expect(carRace.readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다."
    );
  });
  test("readCarsInput 중복 에러", async () => {
    const answer = ["carca,carca,car1"];
    mockQuestions(answer);

    const carRace = new CarRace();
    await expect(carRace.readCarsInput()).rejects.toThrow(
      "[ERROR] 자동차 이름에 중복이 있습니다."
    );
  });
  test("readCarsInput 통과 테스트", async () => {
    const answer = ["car1,car2,lurgi,tisi"];
    mockQuestions(answer);

    const carRace = new CarRace();
    const cars = await carRace.readCarsInput();
    expect(cars).toEqual("car1,car2,lurgi,tisi");
  });

  test("readTryNumber 에러1", async () => {
    const answer = ["1e"];
    mockQuestions(answer);

    const carRace = new CarRace();
    await expect(carRace.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수는 숫자 값만 입력해주세요."
    );
  });

  test("readTryNumber 에러2", async () => {
    const answer = ["1234q"];
    mockQuestions(answer);

    const carRace = new CarRace();
    await expect(carRace.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수는 숫자 값만 입력해주세요."
    );
  });
  test("readTryNumber 에러3", async () => {
    const answer = [""];
    mockQuestions(answer);

    const carRace = new CarRace();
    await expect(carRace.readTryNumber()).rejects.toThrow(
      "[ERROR] 시도 횟수를 입력하지 않으셨습니다."
    );
  });
  test("readTryNumber 통과", async () => {
    const answer = ["5"];
    mockQuestions(answer);

    const carRace = new CarRace();
    const output = await carRace.readTryNumber();
    expect(output).toEqual(5);
  });

  test("readTryNumber 통과2", async () => {
    const answer = ["99"];
    mockQuestions(answer);

    const carRace = new CarRace();
    const output = await carRace.readTryNumber();
    expect(output).toEqual(99);
  });

  test("handleRaceResult 출력 테스트", () => {});
});
