export const GUIDE_MESSAGES = Object.freeze({
  ENTER_CARNAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ENTER_TRYNUM: '시도할 횟수는 몇 회인가요?\n',
});

export const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT: '[ERROR] 아무것도 입력하지 않았습니다.',
  INVALID_CARNAME_LENGTH: '[ERROR] 올바른 차 이름의 길이가 아닙니다.',
  INCLUDE_BLANK: '[ERROR] 입력값에 공백이 포함되어 있습니다.',
  INCLUDE_NON_NUMERIC_VALUES: '[ERROR] 시도 횟수에 숫자 이외의 값이 포함되어 있습니다.',
  SMALLER_THAN_ONE: '[ERROR] 시도 횟수의 입력값으로 1보다 작은 값이 들어왔습니다.',
});

export const MOVE_FORWARD_CRITERIA = 4;
export const RACING_RESULT = '\n실행결과';
export const WINNER_RESULT = '최종 우승자 :';
