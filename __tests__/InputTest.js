import { MissionUtils } from "@woowacourse/mission-utils";

import getRacingCar from "../src/input/racingCar/getRacingCar.js";
import getTryNumber from "../src/input/tryNumber/getTryNumber.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("getRacingCar", () => {
  test("이름이 유효하면 결과를 리턴시키기", async () => {
    const inputs = ["first,2nd,third"];

    mockQuestions(inputs);

    expect(await getRacingCar()).toStrictEqual([
      { car: "first", currentState: 0 },
      { car: "2nd", currentState: 0 },
      { car: "third", currentState: 0 },
    ]);
  });

  test("이름이 자동차 이름조건(5자 이하)에 맞지 않으면 에러 던지기", async () => {
    const inputs = ["first,second,third"];

    mockQuestions(inputs);

    await expect(getRacingCar()).rejects.toThrow("[ERROR]");
  });

  test("이름이 없으면 있으면 에러 던지기", async () => {
    const inputs = ["name,,name2"];

    mockQuestions(inputs);

    await expect(getRacingCar()).rejects.toThrow("[ERROR]");
  });

  test("이름이 공백이면 에러 던지기", async () => {
    const inputs = ["name, ,name2"];

    mockQuestions(inputs);

    await expect(getRacingCar()).rejects.toThrow("[ERROR]");
  });

  test("이름 사이에 공백이 있으면 에러 던지기", async () => {
    const inputs = ["na me,name2"];

    mockQuestions(inputs);

    await expect(getRacingCar()).rejects.toThrow("[ERROR]");
  });
});

describe("getTryNumber", () => {
  test("입력이 유효하면 그대로 리턴시키기", async () => {
    const inputs = ["1"];

    mockQuestions(inputs);

    expect(await getTryNumber()).toBe(1);
  });

  test("입력이 시도횟수 조건에 맞지 않는 숫자면 에러 던지기", async () => {
    const inputs = ["0"];

    mockQuestions(inputs);

    await expect(getTryNumber()).rejects.toThrow("[ERROR]");
  });

  test("입력이 문자면 에러 던지기", async () => {
    const inputs = ["{"];

    mockQuestions(inputs);

    await expect(getTryNumber()).rejects.toThrow("[ERROR]");
  });

  test("입력에 띄어쓰기가 있으면 에러 던지기", async () => {
    const inputs = ["1 2"];

    mockQuestions(inputs);

    await expect(getTryNumber()).rejects.toThrow("[ERROR]");
  });
  test("입력에 주어지지 않으면 에러 던지기", async () => {
    const inputs = [""];

    mockQuestions(inputs);

    await expect(getTryNumber()).rejects.toThrow("[ERROR]");
  });
});
