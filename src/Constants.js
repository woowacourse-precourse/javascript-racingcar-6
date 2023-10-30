const COMPUTER_MESSAGES = Object.freeze({
  START: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n',
  TRY: '시도할 횟수는 몇 회인가요? \n',
  RESULT: '실행 결과',
  VICTORY: '최종 우승자 : ',
});

const ERROR_MESSAGE = Object.freeze({
  OVER_FIVE: '[ERROR] 자동차 이름은 5자 이하로 입력해주세요.',
  DUPLICATE_NAME: '[ERROR] 중복되는 자동차 이름 없이 입력해주세요.',
  NOTHING_INPUT: '[ERROR] 입력값이 없습니다.',
  SPACING_NAME: '[ERROR] 띄어쓰기(공백) 없이 입력해주세요.',
  NOT_NUMBER: '[ERROR] 1 이상의 숫자만 입력해주세요.',
});

export { COMPUTER_MESSAGES, ERROR_MESSAGE };
