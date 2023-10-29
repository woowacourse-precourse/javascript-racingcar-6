import CreateCar from "../src/CreateCar.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("CreateCar 함수 테스트", () => {
  test(",가 없을경우 문자열 그대로 반환", async () => {
    const inputs = ['정용안'];
    mockQuestions(inputs);
    await expect(CreateCar()).resolves.toContain('정용안');
  });

  test(",를 기준으로 문자열을 나눠서 반환", async () => {
    const inputs = ['이삭,정용안'];
    mockQuestions(inputs);
    await expect(CreateCar()).resolves.toEqual(['이삭', '정용안']);
  });

  test("자동차의 이름이 5자를 초과할 경우 예외 처리", async () => {
    const inputs = ['정용안123'];
    mockQuestions(inputs);
    await expect(CreateCar()).rejects.toThrow('[ERROR]');
  });

  test("자동차의 이름이 입력되지 않았을 경우 예외 처리", async () => {
    const inputs = [''];
    mockQuestions(inputs);
    await expect(CreateCar()).rejects.toThrow('[ERROR]');
  });
});

