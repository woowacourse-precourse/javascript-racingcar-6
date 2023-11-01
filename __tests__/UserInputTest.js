import UserInput from "../src/lib/userinput";
import { Message } from "../src/lib/message";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const message = new Message();

describe("UserInput", () => {
  describe("getCarInput", () => {
    test("should split input into an array", async () => {
      const input = ["car1,car2,car3"];
      const output = ["car1", "car2", "car3"];

      mockQuestions(input);

      const userInput = new UserInput();
      const result = await userInput.getCarInput(input);

      expect(result).toEqual(output);
    });
  });

  describe("getRaceTryInput", () => {
    test("should return the input as is", async () => {
      const input = ["5"];
      const output = "5";

      mockQuestions(input);

      const userInput = new UserInput();
      const result = await userInput.getRaceTryInput(input);
      expect(result).toBe(output);
    });
  });

  describe("validateCarArray", () => {
    test("should throw an error if the number of cars is less than 2", async () => {
      const input = ["car1"];

      const userInput = new UserInput();
      await expect(userInput.validateCarArray(input)).rejects.toThrow(
        message.carInputErrorMessage4
      );
    });

    test("should throw an error if the number of cars is more than 10", async () => {
      const input = [
        "car1",
        "car2",
        "car3",
        "car4",
        "car5",
        "car6",
        "car7",
        "car8",
        "car9",
        "car10",
        "car11",
      ];

      const userInput = new UserInput();
      await expect(userInput.validateCarArray(input)).rejects.toThrow(
        message.carInputErrorMessage5
      );
    });
  });

  // Add more test cases for validation functions
});
