import User from "../src/RacingCar/User.js";
import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../src/const/messages.js";

const mockInput = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe("입력값 테스트", () => {
  let user;
  beforeEach(() => {
    user = new User();
  })

  test("각 자동차의 이름은 5자 이하", async () => {
    const input = "bin,min,jayert";
    mockInput(input);

    await expect(user.getNameInput()).rejects.toThrow(MESSAGES.nameLengthError);
  });

  test("시도 횟수는 숫자형", async () => {
    const input = "g";
    mockInput(input);

    await expect(user.getCountInput()).rejects.toThrow(MESSAGES.numberError);
  });
});