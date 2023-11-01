export const GAME_RULE_NUMBER = {
  numMin: 0,
  numMax: 9,
  thresholdNum: 4,
  nameLen: 5,
};

export const INPUT_MESSAGES = {
  inputCarName:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  inputTryNum: '시도할 횟수는 몇 회인가요?\n',
};

export const PRINT_MESSAGES = {
  executionResult: '\n실행 결과',
  winnerList: (winnerList) => `최종 우승자 : ${winnerList}`,
  progressProcess: (name, progress) => `${name} : ${progress}`,
  forward: '-',
};

export const ERROR_MESSAGES = {
  errorNameLen: `[ERROR] 이름은 ${GAME_RULE_NUMBER.nameLen}글자 이하만 가능합니다.`,
  errorNameSpace: '[ERROR] 공백 없이 입력해야 합니다.',
  errorNameEmpty: '[ERROR] 입력 값이 없습니다. 이름을 입력해주세요.',
  errorNameType: '[ERROR] 이름은 한글과 영어만 허용됩니다.',
  errorTryNumType: '[ERROR] 입력 값이 숫자가 아닙니다.',
  errorTryNumZero: '[ERROR] 0회는 실행이 불가능합니다.',
};
