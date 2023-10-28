import LIMIT from './limit';

export const PROMPT_MESSAGE = {
  INPUT_CARS_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  INPUT_TRY_TIME: '시도할 횟수는 몇 회인가요?',
};

export const ERROR_MESSAGE = {
  EMPTY_INPUT: '[ERROR] 값을 입력해주세요.',
  INVALID_INPUT: '[ERROR] 영대소문자, 한글, "," 로만 이루어져야 합니다.',
  LESS_TWO_NAME: '[ERROR] 자동차는 2대 이상이어야 합니다.',
  OVER_LENGTH_NAME: `[ERROR] 자동차의 이름은 ${LIMIT.CAR_NAME_MAX_LENGTH}글자 이하여야 합니다.`,
};
