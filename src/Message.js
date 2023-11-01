const GAME_MESSAGE = Object.freeze({
  INPUT_CARNAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  INPUT_TRYNUMBER: '시도할 횟수는 몇 회인가요?\n',
  WINNER: (winnerName) => `최종 우승자 : ${winnerName}`,
  RESULT: (element) => `${element.name} : ${element.result}\n`,
});

const ERROR_MESSAGE = Object.freeze({
  LENGTH: '[ERROR] 자동차 이름은 5자 이하로 작성해주세요.',
  GAP: '[ERROR] 공백은 넣지 말아주세요.',
  NUMBER: '[ERROR] 숫자를 입력해주세요.',
});

const CONSTANT = Object.freeze({
  NAME_LENGTH_LIMIT: 5,
  GOFORWARD_NUMBER: 4,
});

export { GAME_MESSAGE, ERROR_MESSAGE, CONSTANT };
