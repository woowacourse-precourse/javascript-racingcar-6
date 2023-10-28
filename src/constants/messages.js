export const MESSAGE = Object.freeze({
  START: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '실행 결과\n',
  WINNER: '최종 우승자 : ',
});

const ERROR_PREFIX = '[ERROR]';
export const ERROR_MESSAGE = Object.freeze({
  DUPLICATION: `${ERROR_PREFIX} 중복된 자동차의 이름은 입력할 수 없습니다.\n`,
  NUMBER_OF_CHARACTERS: `${ERROR_PREFIX} 각 자동차의 이름은 최소 글자 1글자 이상, 최대 5글자까지 입력할 수 있습니다.\n`,
  INVALID_NAME: `${ERROR_PREFIX} 자동차의 이름은 영문으로만 입력할 수 있습니다.\n`,
  PLAYER_COUNT: `${ERROR_PREFIX} 경주할 자동차는 최소 2대 이상, 최대 10대까지 입력해야 합니다.\n`,
  INVALID_MOVE_COUNT: `${ERROR_PREFIX} 이동할 수 있는 횟수는 최소 1회 ~ 최대 10회로 설정해야 합니다.\n`,
});
