export const COMMAS = {
  KR_NAME: '쉼표',
  SYMBOL: ',',
};

export const CAR = {
  MIN: 2,
  LENGTH: 5,
};

export const TRY = {
  MIN: 1,
};

export const RANDOM_NUMBER = {
  MIN: 0,
  MAX: 9,
};

export const MOVE = {
  CONSTRAINT_NUM: 4,
  SYMBOL: '-',
};

export const TEXT = {
  INITIAL: `경주할 자동차 이름을 입력하세요.(이름은 ${COMMAS.KR_NAME}(${COMMAS.SYMBOL}) 기준으로 구분)\n`,
  TRY: '시도할 횟수는 몇 회인가요?\n',
  RESULT_MESSAGE: (name, result) => `${name} : ${result}\n`,
};

export const ERROR = {
  CAR_NAME_LENGTH: `[ERROR] 각 자동차 이름의 길이는 ${CAR.LENGTH} 이하여야 합니다.`,
  CAR_MIN: `[ERROR] 최소 경주에 참여하는 자동차는 ${CAR.MIN}대여야 합니다.`,
  COUNT_INPUT: `[ERROR] 실행 횟수는 숫자만 입력 가능 합니다.`,
  COUNT_INPUT_MIN: `[ERROR] 실행 횟수는 ${TRY.MIN} 이상의 숫자만 입력 가능합니다.`,
};

export const REG_EXP = {
  INPUT_NUMBER_VALIDATION: /^[0-9]+$/,
};
