import LIMIT from "../rule/gameRule.js";

const ERROR_TEXT = {
  INPUT: {
    MAX_LENGTH: `[ERROR] 참가자 이름이 ${LIMIT.NAME_LENGTH.MAX}자를 초과했습니다.`,
    BLANK_SPACE: "[ERROR] 참가자 이름을 공백 없이 입력해 주세요.",
    MIN_REGISTRAR: `[ERROR] 참가자는 최소 ${LIMIT.ENTER.MIN}명 이상 등록되어야 합니다.`,
    DUPLICATE_REGISTRAR: "[ERROR] 참가자의 이름이 중복 입력되었습니다.",
  },
};

export default ERROR_TEXT;
