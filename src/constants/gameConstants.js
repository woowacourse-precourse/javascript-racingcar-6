export const GameSetting = Object.freeze({
  minRaceLimit: 1,
  maxRaceLimit: 20,
  nameRegex: /^[a-zA-Z0-9-_]+$/,
  raceSuccessLimit: 3,
  maxNameLength: 5,
});

export const GameOutputMsg = Object.freeze({
  gameStartMessage: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  roundsInputMessage: "시도할 횟수는 몇 회인가요?\n",
  raceStartMessage: "실행 결과",
  winnerPrefix: "최종 우승자 : ",
});

const ERROR_PREFIX = "[ERROR]";

export const GameErrorMsg = Object.freeze({
  ERROR_PREFIX,
  numberInputError: `${ERROR_PREFIX} 숫자만 입력해주세요`,
  numberRangeError: `${ERROR_PREFIX} 1이상 20이하의 숫자만 입력해주세요`,
  carNameFormatError: `${ERROR_PREFIX} 차량의 이름이 잘못 된 형식입니다!`,
  uniqueCarNameError: `${ERROR_PREFIX} 차량의 이름을 서로 다르게 입력해주세요`,
  maxLengthNameError: `${ERROR_PREFIX} 차량의 이름은 최대 5자 입니다`,
  nameFormatError: `${ERROR_PREFIX} 차량의 이름이 잘못 된 형식입니다!`,
  sameCarNameError: `${ERROR_PREFIX} 차량의 이름을 서로 다르게 입력해주세요`,
});
