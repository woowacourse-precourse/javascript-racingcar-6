import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("사용자 입력 배열 test", () => {
  test.each([
    [[' aedfef']],
		[['ase, asd ']]
  ])("이름에 공백에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 이름에 공백이 있습니다.");
  });

  test.each([
    [['ase,,aedfef']],
		[['ase,aedfef']]
  ])("이름에 길이 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 참가자 이름은 1~5글자로 작성해주세요.");
  });

	test.each(
		[[["abcd,a#a"]], [['aabc,a23']], [['aabc,123']], [['aabc,a승민z']], [['aabc,a!d3']]]
		)("영어가 아닌 다른 문자에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);
    // when
    const app = new App();
    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });
});
