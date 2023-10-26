import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../models/InputValidator.js";

const ConsoleInput = {
  getCarNames: async () => {
    let input = await Console.readLineAsync("");
    const arrInput = input.split(",");
    InputValidator(arrInput);
  },

  getNumberOfAttempts: async () => {
    let input = await Console.readLineAsync("");
    const numInput = parseInt(input);
    InputValidator(input);
  },
};

export default ConsoleInput;
