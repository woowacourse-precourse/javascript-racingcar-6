export const INPUT_MESSAGE = Object.freeze({
  PLAYER_CARS: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  MOVE_COUNTS: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  START: '실행 결과',
  RESULT: ' : ',
  WINNER: '최종 우승자 : ',
});

export const ERROR_MESSAGE = Object.freeze({
  BLANK: '[ERROR] 공백대신 , 쉼표를 통해 사용자를 구분해야합니다.',
  LOWERCASE: '[ERROR] 차 이름은 소문자영어로만 이뤄져야합니다.',
  LENFIVE: '[ERROR] 차 이름은 5글자 이하여야만 합니다.',
  UNIQUE: '[ERROR] 차 이름은 중복될 수 없습니다.',
  NUMBER: '[ERROR] 숫자만 입력해야합니다.',
  NEGATIVE: '[ERROR] 횟수는 0보다 커야합니다.',
  INT: '[ERROR] 양수인 정수만 입력해야합니다.',
})