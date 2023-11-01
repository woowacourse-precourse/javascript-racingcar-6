import ERROR_TEXT from "../constants/message/errorText.js";
import LIMIT from "../constants/rule/gameRule.js";

export const validateCarNameFormat = (carName) => {
  if (carName.length > LIMIT.NAME_LENGTH.MAX) {
    throw new Error(ERROR_TEXT.INPUT.MAX_LENGTH);
  }

  if (carName === "") {
    throw new Error(ERROR_TEXT.INPUT.BLANK_SPACE);
  }

  return true;
};

export const validateMinRegistrar = (registrarList) => {
  if (registrarList.length < LIMIT.ENTER.MIN) {
    throw new Error(ERROR_TEXT.INPUT.MIN_REGISTRAR);
  }

  return true;
};

export const validateDuplicateRegistrar = (registrarList) => {
  if (registrarList.length !== [...new Set(registrarList)].length) {
    throw new Error(ERROR_TEXT.INPUT.DUPLICATE_REGISTRAR);
  }
};

export const validateRoundCount = (roundCount) => {
  if (isNaN(Number(roundCount))) {
    throw new Error(`[ERROR] 숫자 이외의 값이 입력되었습니다.`);
  }

  if (roundCount === " ") {
    throw new Error("[ERROR] 입력에 공백이 포함되었습니다.");
  }

  return true;
};
