import { MESSAGE } from "./Constant";

const Validation = {
  /**@param {string[]}names */
  validationDuplicateCarName: (names) => {
    const set = new Set(names);
    if (set.size !== names.length) {
      throw new Error(MESSAGE.DUPLICATE_CAR_NAME);
    }
  },

  /** @param {string} name*/
  validationCarName: (name) => {
    if (name.length < 1 || name.length > 5) {
      throw new Error(MESSAGE.INVALID_CAR_NAME);
    }
  },

  /**@param {number}count */
  validationCount: (count) => {
    if (!Number.isInteger(parseFloat(count)) || count < 1) {
      throw new Error(MESSAGE.INVALID_TRY_COUNT);
    }
  },
};

export default Validation;
