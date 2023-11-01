export const GAME_MESSAGE = {
  start: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  inputTry: '시도할 횟수는 몇 회인가요?',
  result: '실행 결과',
  winner: '최종 우승자 : ',
};

export const CARNAME_ERROR_MESSAGE = {
  commaError: '[ERROR] 쉼표로 구분해 주세요.',
  spaceError: '[ERROR] 공백이 포함되어 있습니다.',
  lengthError: '[ERROR] 5자 이하로 입력해 주세요',
  duplicationError: '[ERROR] 중복된 이름이 있습니다.',
  singleError: '[ERROR] 자동차 이름을 추가해 주세요.',
};

export const TRYCOUNT_ERROR_MESSAGE = {
  typeError: '[ERROR] 숫자로 입력해 주세요.',
  inputError: '[ERROR] 시도할 횟수를 입력해 주세요.',
};

export const ERROR_MESSAGE = {
  ...CARNAME_ERROR_MESSAGE,
  ...TRYCOUNT_ERROR_MESSAGE,
};
