const INPUT_MESSAGE = {
  name: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  count: '시도할 횟수는 몇 회인가요?\n',
};

const ERROR_MESSAGE = {
  nothing: '[ERROR] 입력되지 않았습니다.',
  deficiency: '[ERROR] 입력된 자동차가 2대 미만입니다.',
  duplication: '[ERROR] 중복된 자동차 이름이 존재합니다.',
  empty: '[ERROR] 자동차 이름이 입력되지 않은 부분이 있습니다.',
  over: '[ERROR] 자동차 이름이 5자를 초과했습니다.',
  notNumber: '[ERROR] 숫자가 아닙니다.',
  notIntegar: '[ERROR] 정수가 아닙니다.',
  small: '[ERROR] 1 미만의 숫자입니다.',
};

const RESULT_STATUS = {
  progress: '\n실행 결과',
  sign: '-',
  winner: '최종 우승자 : ',
};

const RACE_NUMBER = {
  minArrLength: 2,
  maxNameLength: 5,
  minRandom: 0,
  maxRandom: 9,
  drive: 4,
};

export { INPUT_MESSAGE, ERROR_MESSAGE, RESULT_STATUS, RACE_NUMBER };
