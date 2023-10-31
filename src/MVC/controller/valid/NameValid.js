import NAME_ERROR_MESSAGE from "../../constants/nameErrorMessage.js";
import SYMBOLS from "../../constants/symbols.js";

class NameValid {
  // 이름 유효 검증
  nameIsValid(name) {
    const nameSplit = name.split(SYMBOLS.comma);
    const cleanedNames = nameSplit.map((value) => value.trim());
    if (nameSplit.length === 1 && nameSplit.includes(SYMBOLS.emptyString)) {
      throw new Error(`${NAME_ERROR_MESSAGE.emptyError}`);
    }
    if (nameSplit.some((value) => value.length > 5)) {
      throw new Error(`${NAME_ERROR_MESSAGE.nameLimitError}`);
    }
    if (nameSplit.every((value) => value.trim() === SYMBOLS.emptyString)) {
      throw new Error(`${NAME_ERROR_MESSAGE.onlyEmptyError}`);
    }
    if (cleanedNames.includes(SYMBOLS.emptyString)) {
      throw new Error(`${NAME_ERROR_MESSAGE.emptyIncludesError}`);
    }
    // if (new Set(cleanedNames).size !== nameSplit.length) {
    //   throw new Error(`${NAME_ERROR_MESSAGE.duplicateError}`);
    // }
    return nameSplit;
  }
}

export default NameValid;
