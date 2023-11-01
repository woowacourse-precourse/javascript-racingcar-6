import { MissionUtils } from "@woowacourse/mission-utils";
import Prompter from "../src/utils/Prompter";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  })
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockImplemen;
  return logSpy;
}

describe('Prompter 객체 검사', () => { 
  test('입력값이 문자열로 변환되는지 확인', async () => {
    const input = [123]
    const output = '123'
    mockQuestions(input);

    // when
    const prompter = new Prompter();
    const result = await prompter.getUserInput();

    expect(result).toEqual(output);
  })
})