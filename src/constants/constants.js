const ENTER_CAR_NAME
  = '경주할 자동차 이름을 입력하세요.이름은 쉼표(,) 기준으로 구분하며 공백을 포함하면 안되고 5글자 이하 최대 10개 까지 등록가능합니다.\n';

const ENTER_NUMBER_TO_ATTEMPT
  = '시도할 횟수는 몇 회인가요? 10회 이하로 입력해주세요.\n';

const NOT_VALID_CARS_NAME = '[ERROR]: 자동차 이름이 잘못된 형식입니다.';

const NOT_VALID_NUMBER = '[ERROR]: 숫자가 잘못된 형식입니다.';

const EXECUTION_RESULT = '\n실행결과';

const WINNER = '최종 우승자 : ';

export const MESSAGE = {
  ENTER_CAR_NAME,
  ENTER_NUMBER_TO_ATTEMPT,
  NOT_VALID_CARS_NAME,
  NOT_VALID_NUMBER,
  EXECUTION_RESULT,
  WINNER,
};

const MAX_CARLIST_LENGTH = 10;

const MIN_CARLIST_LENGTH = 2;

const MAX_CAR_NAME_LENGTH = 5;

const MIN_FOWARD_NUMBER = 4;

export const SIZE_LIMITS = {
  MAX_CARLIST_LENGTH,
  MIN_CARLIST_LENGTH,
  MAX_CAR_NAME_LENGTH,
  MIN_FOWARD_NUMBER,
};
