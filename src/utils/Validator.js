import { EXCEPTION } from "./Constant";

const Validator = {
  checkNull(input) {
    if (!input) throw new Error(EXCEPTION.null);
  },
  checkNameLength(input) {
    input.map((name) => {
      if (name.length > 6) {
        throw new Error(EXCEPTION.length);
      }
    })
  },
  checkCount(input) {
    input.split('').forEach((char) => {
      if (!'0123456789'.includes(char)) {
        throw new Error(EXCEPTION.integer);
      }
    });
  },
}

export { Validator };