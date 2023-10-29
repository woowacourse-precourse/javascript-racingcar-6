export const RANGE_NUMBER = Object.freeze({
  min: 0,
  max: 9,
});

export const MESSAGE = Object.freeze({
  winner: '최종 우승자 : ',
  ask_car_name: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ask_number_of_time: '시도할 횟수는 몇 회인가요?\n',
  empty: '',
  execution_result: '실행 결과',
});

export const ERROR_MESSAGE = Object.freeze({
  wrong_answer: ',로 구분하여 2인 이상 이름을 입력해주세요',
  over_name_length: '이름은 5자 이하만 가능합니다',
  invalid_number_of_time: '1회 이상 100회 이하의 횟수만 가능합니다',
  only_number: '숫자만 입력이 가능합니다',
  only_text: '문자만 입력이 가능합니다',
});

export const EXCUTION_NUMBER = Object.freeze({
  min: 1,
  max: 100,
});

export const REGEXP = Object.freeze({
  only_en_ko: /^[a-zA-Z가-힣ㄱ-ㅎ]+$/,
  only_number: /^\d+$/,
});

export const DITANCE_SYMBOL = '-';
export const NAME_MAX_LENGTH = 5;
export const WINNER_DIVIDER = ', ';
export const INPUT_DIVIDER = ',';
