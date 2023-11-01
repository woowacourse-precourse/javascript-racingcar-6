const PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  NO_VALUE: `${PREFIX} 값을 입력해주세요`,
  NOT_INREGER: `${PREFIX} 정수를 입력해주세요`,
  LENGTH_OVER: `${PREFIX} 최대 길이 5를 초과한 자동차가 있습니다.`,
};

const GAME_MESSAGE = {
  WINNERS: '최종 우승자 : ',
  INPUT_CAR: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_NUMBER: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '실행 결과',
};

export { ERROR_MESSAGE, GAME_MESSAGE };
