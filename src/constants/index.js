export const GAME_RULE = Object.freeze({
  MAX_NAME_LENGTH: 5,
  DELIMITER_FOR_CAR_NAMES: ',',
  MIN_NUMBER: 0,
  MAX_NUMBER: 9,
  FORWARD_STANDARD: 4,
  MIN_TRY_COUNT: 1,
  DELIMITER_FOR_FORWARD: '-',
  DELIMITER_FOR_WINNER: ', ',
})

export const GAME_MESSAGE = Object.freeze({
  INPUT_CAR_NAMES: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${GAME_RULE.DELIMITER_FOR_CAR_NAMES}) 기준으로 구분)\n`,
  INPUT_TRY_COUNT: `시도할 횟수는 몇 회인가요?\n`,
  OUTPUT_RESULT: `실행 결과`,
  OUTPUT_WINNER: `최종 우승자 : `,
})

export const ERROR_MESSAGE = Object.freeze({
  PRIFIX: '[ERROR] ',
  DUPLICATE_NAME: '중복된 자동차 이름이 존재합니다.',
  INVALID_NAME_LENGTH: `자동차 이름은 ${GAME_RULE.MAX_NAME_LENGTH}자 이하로 입력해주세요.`,
  INVALID_TRY_COUNT: `시도 횟수는 ${GAME_RULE.MIN_TRY_COUNT} 이상의 정수만 입력 가능합니다.`,
})
