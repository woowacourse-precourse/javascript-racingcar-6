import { GMAEVALIDATION } from "./validation.js";

export const GAMEMSG = Object.freeze({
  input_CarName:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  input_tryNum: "시도할 횟수는 몇 회인가요?\n",
});

export const ERRORMSG = Object.freeze({
  invalid_min_carList: `[ERROR] 최소 자동차의 갯수는 ${GMAEVALIDATION.min_carlist}대입니다.`,
  invalid_carlist_length: `[ERROR] 입력할 수 있는 자동차의 최대갯수는 ${GMAEVALIDATION.max_carlist_length}대입니다.`,
  invalid_duplicate_name: "[ERROR] 중복된 자동차 이름은 입력할 수 없습니다.",
  invalid_carname_length: `[ERROR] 자동차 이름은 ${GMAEVALIDATION.max_carname_length}글자 이하여야 합니다.`,
  invalid_contain_gap: "[ERROR] 자동차 이름에 공백이 들어갈 수 없습니다.",
  invalid_contain_not: "[ERROR] 자동차 이름은 빈 문자열이 들어갈 수 없습니다.",
  invalid_special_character:
    "[ERROR] 자동차 이름에 특수문자는 사용할 수 없습니다.",
  invalid_korean_character:
    "[ERROR] 자동차 이름에 한국어는 사용할 수 없습니다.",
  invalid_negative: "[ERROR] 1이상의 값을 입력해주세요.",
  invalid_not_number: "[ERROR] 숫자를 입력했는지 확인해주세요",
  invalid_exceed_max_try: `[ERROR] 최대 ${GMAEVALIDATION.max_try}만큼 시도할 수 있습니다.`,
});
