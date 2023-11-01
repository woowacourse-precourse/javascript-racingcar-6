const INPUT_NAME = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
const INPUT_COUNT = '시도할 횟수는 몇 회인가요?\n';

const RESULT_MESSAGE = '실행 결과';
const FINAL_WINNER = '최종 우승자 : ';

const MOVE = '-';

const ERROR_PREFIX = '[ERROR]';
const ERROR = {
  invalidNameLength: `${ERROR_PREFIX} 자동차 이름은 1자 이상, 5자 이하만 가능합니다.`,
  invalidNumberOfNames: `${ERROR_PREFIX} 자동차 이름은 2개 이상 입력해야 합니다.`,
  nameDuplicated: `${ERROR_PREFIX} 자동차 이름은 중복될 수 없습니다.`,
  invalidCountType: `${ERROR_PREFIX} 숫자만 입력 가능합니다.`,
  invalidCountRange: `${ERROR_PREFIX} 1 이상의 숫자만 입력 가능합니다.`,
};

export { INPUT_NAME, INPUT_COUNT, MOVE, RESULT_MESSAGE, FINAL_WINNER, ERROR };
