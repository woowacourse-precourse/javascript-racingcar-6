import { NUMBER_MESSAGES } from "../utils/messages";
import { readInput } from "../utils/missionUtils";

const validTryNumber = (input) => {
  const trimInput = input.trim();
  const NUMBER = Number(trimInput);
  if (trimInput === "") throw new Error(NUMBER_MESSAGES.ERROR.NOT_BLANK);
  if (Number.isNaN(NUMBER)) throw new Error(NUMBER_MESSAGES.ERROR.MUST_NUMBER);
  if (NUMBER < 1) throw new Error(NUMBER_MESSAGES.ERROR.MUST_OVER_1);
  if (NUMBER >= 100) throw new Error(NUMBER_MESSAGES.ERROR.MUST_UNDER_100);
};

const numberHandler = {
  readTryNumber: async () => {
    const INPUT = await readInput(NUMBER_MESSAGES.INPUT);

    validTryNumber(INPUT);
    return Number(INPUT);
  },
};

export default numberHandler;
