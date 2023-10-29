export const COMMAS = {
  KR_NAME: '쉼표',
  SYMBOL: ',',
};

export const CAR = {
  MIN: 2,
  LENGTH: 5,
};

export const TEXT = {
  INITIAL: `경주할 자동차 이름을 입력하세요.(이름은 ${COMMAS.KR_NAME}(${COMMAS.SYMBOL}) 기준으로 구분)\n`,
};

export const ERROR = {
  CAR_NAME_LENGTH: `[ERROR] 각 자동차 이름의 길이는 ${CAR.LENGTH} 이하여야 합니다.`,
  CAR_MIN: `[ERROR] 최소 경주에 참여하는 자동차는 ${CAR.MIN}대여야 합니다.`,
};
