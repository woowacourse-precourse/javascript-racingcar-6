export const PLAYER_INPUT = {
  CARS_NAME_PROMPT:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  TRY_NUMBER_PROMPT: '시도할 횟수는 몇 회인가요?',
};

export const ERROR_MESSAGES = {
  INVALID_CARS_NAME_LENGTH:
    '[ERROR] 자동차의 이름은 5글자 이하로 입력해 주세요',
  INVALID_CARS_NAME_STRING: '[ERROR] 자동차의 이름에는 영어만 사용할 수 있어요',
  INVALID_CARS_NAME_DUPLICATE: '[ERROR] 자동차의 이름은 중복될 수 없어요',
  INVALID_TRY_NUMBER_NEGATIVE: '[ERROR] 시도 횟수는 0보다 큰 정수입니다',
};

export const RACE = {
  PROGRESS_BAR: '-',
  START: '실행 결과',
  WINNERS: '최종 우승자',
};
