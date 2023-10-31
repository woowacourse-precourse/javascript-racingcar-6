import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 게임 자동차 입력 테스트", () => {
  test("5글자 이상 입력", async () => {
    const input = ["pobi,javaji"];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 이름은 5글자 이하만 가능합니다.');
  });

  test("중복 이름 입력", async () => {
    const input = ["pobi,pobi"];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 중복된 이름이 존재합니다.');
  });

  test("입력 없음", async () => {
    const input = [''];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 공백은 입력할 수 없습니다.');
  });
});
