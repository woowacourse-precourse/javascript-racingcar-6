import { CHARACTER_LIMIT, NAME_INPUT_ERROR } from "../modules/Constants.js";

const ValidationName = {
  checkName(nameList) {
    this.checkNull(nameList);
    this.checkEmpty(nameList);
    this.checkLong(nameList);
  },

  checkNull(nameList) {
    if (nameList.length === 1 && nameList[0] === "") {
      throw new Error(NAME_INPUT_ERROR.null);
    }
  },

  checkEmpty(nameList) {
    nameList.forEach((name) => {
      if (name.length === 0) {
        throw new Error(NAME_INPUT_ERROR.empty);
      }
    });
  },

  checkLong(nameList) {
    nameList.forEach((name) => {
      if (name.length > CHARACTER_LIMIT) {
        throw new Error(NAME_INPUT_ERROR.long);
      }
    });
  },
};

export default ValidationName;
