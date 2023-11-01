import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../src/const/messages.js";

const mockInput = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe("입력값 테스트", () => {
  let app;
  beforeEach(() => {
    app = new App;
  })

  test("각 자동차의 이름은 5자 이하", async () => {
    const input = "bin,min,jayert";
    mockInput(input);

    await expect(app.getNameInput()).rejects.toThrow(MESSAGES.nameLengthError);
  });

  test("시도 횟수는 숫자형", async () => {
    const input = "g";
    mockInput(input);

    await expect(app.getCountInput()).rejects.toThrow(MESSAGES.numberError);
  });
});