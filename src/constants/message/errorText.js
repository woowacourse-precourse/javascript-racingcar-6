import { LIMIT } from "../rule/gameRule.js";

const ERROR_TEXT = {
  INPUT: {
    MAX_LENGTH: `[ERROR] 참가자 이름이 ${LIMIT.NAME_LENGTH.MAX}자를 초과했습니다.`,
    BLANK_SPACE: "[ERROR] 참가자 이름을 공백 없이 입력해 주세요.",
  },
};

export default ERROR_TEXT;
