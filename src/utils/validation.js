import MSG from './message.js';

const Validation = {
  strSize(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(MSG.ERROR_NAME_UP_TO_5_LETTERS);
      }
    });
  },
  isItNumber(num) {
    if (Number.isNaN(Number(num))) {
      throw new Error(MSG.ERROR_TYPE_IS_ONLY_NUMBER);
    }
  },
};

export default Validation;
