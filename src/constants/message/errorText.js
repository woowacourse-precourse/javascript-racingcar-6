import LIMIT from "../rule/gameRule.js";

const ERROR_TEXT = {
  INPUT: {
    COMMON: {
      BLANK_SPACE:
        "[ERROR] 입력에 공백이 포함되어 있습니다. 공백을 제외하고 입력을 해주세요.",
    },
    CAR_NAME: {
      MIN_REGISTRAR: `[ERROR] 참가자는 최소 ${LIMIT.ENTER.MIN}명 이상 등록되어야 합니다.`,
      MAX_LENGTH: `[ERROR] 참가자 이름이 ${LIMIT.NAME_LENGTH.MAX}자를 초과했습니다.`,
      DUPLICATE_REGISTRAR: "[ERROR] 참가자의 이름이 중복 입력되었습니다.",
      NOT_ENTER: "[ERROR] 참가자의 이름을 입력받지 못했습니다.",
    },
    ROUND_COUNT: {
      NAN: "[ERROR] 숫자 이외의 값이 입력되었습니다.",
    },
  },
};

export default ERROR_TEXT;
