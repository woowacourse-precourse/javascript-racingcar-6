import { MissionUtils } from "@woowacourse/mission-utils";
import InputNumber from '../src/InputNumber.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("InputNumber 함수 테스트", () => {
  test("1이상의 숫자를 입력했을경우 그대로 반환", async () => {
    const inputs = ['3'];
    mockQuestions(inputs);
    await expect(InputNumber()).resolves.toEqual(3);
  });

  test("0을 입력했을 경우 예외 처리", async () => {
    const inputs = ['0'];
    mockQuestions(inputs);
    await expect(InputNumber()).rejects.toThrow('[ERROR]');
  });

  test("숫자가 아닌 값을 입력했을 경우 예외 처리", async () => {
    const inputs = ['a'];
    mockQuestions(inputs);
    await expect(InputNumber()).rejects.toThrow('[ERROR]');
  });
});