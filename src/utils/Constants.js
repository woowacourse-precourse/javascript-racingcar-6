const IN_GAME_MESSAGE = {
  getCarName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  getTryCount: '시도할 횟수는 몇 회인가요?\n',
  tryResult: '\n실행 결과\n',
  finalWinner: '최종 우승자 :',
}

const FORWARD_CRITERIA = 4;

const ERROR_MESSAGE = {
  null: '[ERROR] 아무것도 입력하지 않았습니다. 이름을 입력해 주세요.',
  empty: '[ERROR] 이름의 길이가 0 입니다. 한 글자 이상의 이름을 입력해 주세요.', 
  long: '[ERROR] 이름이 다섯 글자를 초과했습니다. 다섯 글자 이하의 이름을 입력해 주세요.',
}

export { IN_GAME_MESSAGE, FORWARD_CRITERIA, ERROR_MESSAGE};