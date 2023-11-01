import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils"

const mockInput = (input) => {
  Console.readLineAsync = jest.fn(() => Promise.resolve(input));
};

describe("App class Test", () => {
  test("getCarName 사용자 입력", async () => {
    const testInput = "pobi,woni,jun";
    mockInput(testInput);

    const app = new App();
    const result = await app.getCarName();

    expect(Console.readLineAsync).toHaveBeenCalledTimes(1);
    expect(result).toBe(testInput);
  });
});