import { mockQuestions } from "./ApplicationTest.js";
import App from "../src/App.js";

describe("이름 입력", () => {
  test.each([
    [["aaaaaa,b"]], //6자리 이상
    [[""]], //공백
    [[",b"]], //이름을 입력하지 않음
    [["a ,b"]], //이름 앞뒤 띄어쓰기?
    [["aaaa", "aaaa"]],
  ])("이름 입력 예외처리", async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
