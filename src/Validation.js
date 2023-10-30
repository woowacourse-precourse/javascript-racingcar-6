import { generateRandomNumber } from "./utils/index.js";

export const Validation = {
  validateGoForward: () => {
    return generateRandomNumber() >= 4;
  },
};
