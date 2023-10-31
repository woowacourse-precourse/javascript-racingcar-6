const Validation = {
  /**@param {string[]}names */
  validationDuplicateCarName: (names) => {
    const set = new Set(names);
    if (set.size !== names.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다.");
    }
  },

  /** @param {string} name*/
  validationCarName: (name) => {
    if (name.length < 1 || name.length > 5) {
      throw new Error("[ERROR] 1~5 자의 자동차 이름을 입력해 주세요.");
    }
  },

  /**@param {number}count */
  validationCount: (count) => {
    if (!Number.isInteger(parseFloat(count)) || count < 1) {
      throw new Error("[ERROR] 자연수를 입력해 주세요.");
    }
  },
};

export default Validation;
