export const GAMEMSG = Object.freeze({
  inputCarName:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
});

export const ERRORMSG = Object.freeze({
  invalid_carlist_length:
    "[ERROR] 입력할 수 있는 자동차의 최대갯수는 5대입니다.",
  invalid_duplicate_name: "[ERROR] 중복된 자동차 이름은 입력할 수 없습니다.",
  invalid_carname_length: "[ERROR] 자동차 이름은 5글자 이하여야 합니다.",
  invalid_contain_gap: "[ERROR] 자동차 이름에 공백이 들어갈 수 없습니다.",
  invalid_contain_not: "[ERROR] 자동차 이름은 빈 문자열이 들어갈 수 없습니다.",
  invalid_special_character:
    "[ERROR] 자동차 이름에 특수문자는 사용할 수 없습니다.",
  invalid_korean_character:
    "[ERROR] 자동차 이름에 한국어는 사용할 수 없습니다.",
});
