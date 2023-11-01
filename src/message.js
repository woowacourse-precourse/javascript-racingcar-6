import {
  PROGRESS_BAR,
  MINIMUM_NAME_NUMBER,
  NAME_LETTER_NUMBER_LIMIT,
} from './constant.js';

export const ANNOUNCEMENT = {
  EXECUTION: '\n실행 결과',
  EXECUTION_RESULT: (name, forwardNumber) =>
    `${name} : ${PROGRESS_BAR.repeat(forwardNumber)}`,
  WINNER: (winner) => `최종 우승자 : ${winner}`,
};

export const INPUT = {
  USER_LIST: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  NUMBER_OF_ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',
};

export const ERROR = {
  DUPLICATE_NAME: '[ERROR] 중복된 이름이 존재합니다.',
  SHORTAGE_NAME_NUMBER: `[ERROR] ${MINIMUM_NAME_NUMBER}개 이상의 이름이 입력되어야 합니다.`,
  SHORTAGE_NAME_LETTER_NUMBER: '[ERROR] 1글자 이상의 이름이 입력되어야 합니다.',
  EXCEEDING_NAME_LETTER_LIMIT: `[ERROR] ${NAME_LETTER_NUMBER_LIMIT}자 이하의 이름이 입력되어야합니다.`,
  INPUT_ATTEMPT: '[ERROR] 1 이상의 정수가 입력되어야합니다.',
};

export const LINE_BREAK = '';
