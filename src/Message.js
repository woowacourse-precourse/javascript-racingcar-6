export const INPUT_MESSAGES = {
  INPUT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_NUM: '시도할 횟수는 몇 회인가요?\n',
};

export const PRINT_MESSAGES = {
  PROGRESS_RESULT: '\n실행 결과',
  WINNER_LIST: (winnerList) => `최종 우승자 : ${winnerList}`,
  PROGRESS_PROCESS: (name, progress) => `${name} : ${progress}`,
  FORWARD: '-',
};

export const ERROR_MESSAGES = {
  ERROR_NAME_LEN: '이름은 5글자 이하만 가능합니다.',
  ERROR_NAME_SPACE: '공백 없이 입력해야 합니다.',
  ERROR_NAME_EMPTY: '입력 값이 없습니다. 이름을 입력해주세요.',
  ERROR_NAME_TYPE: '이름은 한글과 영어만 허용됩니다.',
  ERROR_TRY_NUM_TYPE: '입력 값이 숫자가 아닙니다.',
};
