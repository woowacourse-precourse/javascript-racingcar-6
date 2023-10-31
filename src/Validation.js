const Validation = {
  /** @param {string} */
  validationCarName: (name) => {
    if (name.length < 1 || name.length > 5) {
      throw new Error("[ERROR] 1~5 자의 자동차 이름을 입력해 주세요.");
    }
  },
};
