import ERROR_TEXT from "../constants/message/errorText.js";
import { LIMIT } from "../constants/rule/gameRule.js";

export const validateCarNameFormat = (carName) => {
  if (carName.length > LIMIT.NAME_LENGTH.MAX) {
    throw new Error(ERROR_TEXT.INPUT.MAX_LENGTH);
  }

  if (carName === "") {
    throw new Error(ERROR_TEXT.INPUT.BLANK_SPACE);
  }

  return true;
};

export const validateMinRegistrar = (array) => {
  if (array.length < LIMIT.ENTER.MIN) {
    throw new Error(
      `[ERROR] 참가자는 최소 ${LIMIT.ENTER.MIN}명 이상 등록되어야 합니다.`,
    );
  }

  return true;
};
