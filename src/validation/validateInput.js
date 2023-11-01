import ERROR_TEXT from "../constants/message/errorText.js";
import LIMIT from "../constants/rule/gameRule.js";

export const validateCarNameFormat = (carName) => {
  if (carName.length > LIMIT.NAME_LENGTH.MAX) {
    throw new Error(ERROR_TEXT.INPUT.CAR_NAME.MAX_LENGTH);
  }

  if (carName === "") {
    throw new Error(ERROR_TEXT.INPUT.CAR_NAME.NOT_ENTER);
  }

  if (carName.length !== carName.split(" ").join("").length) {
    throw new Error(ERROR_TEXT.INPUT.COMMON.BLANK_SPACE);
  }

  return true;
};

export const validateMinRegistrar = (registrarList) => {
  if (registrarList.length < LIMIT.ENTER.MIN) {
    throw new Error(ERROR_TEXT.INPUT.CAR_NAME.MIN_REGISTRAR);
  }

  return true;
};

export const validateDuplicateRegistrar = (registrarList) => {
  if (registrarList.length !== [...new Set(registrarList)].length) {
    throw new Error(ERROR_TEXT.INPUT.CAR_NAME.DUPLICATE_REGISTRAR);
  }
};

export const validateRoundCount = (roundCount) => {
  if (isNaN(Number(roundCount))) {
    throw new Error(ERROR_TEXT.INPUT.ROUND_COUNT.NAN);
  }

  if (roundCount === " ") {
    throw new Error(ERROR_TEXT.INPUT.COMMON.BLANK_SPACE);
  }

  return true;
};
