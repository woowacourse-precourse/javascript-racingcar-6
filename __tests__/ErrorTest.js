import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
  const input = inputs.shift();
  return Promise.resolve(input);
  });
};
  
describe("에러 테스트", () => {
  test("이름이 다섯 글자가 넘을때 ERROR", async () => {
    const tryOverFive = ["woosup,pobi"];
    mockQuestions(tryOverFive);
    
    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("이름에 공백이 들어갈 때 ERROR",async () => {
    const includeSpace = ["robo cap,river"];
    mockQuestions(includeSpace);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("이름 나열에 ,가 없을 때 ERROR",async () => {
    const notComma = ["drlot"];
    mockQuestions(notComma);
    
    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});