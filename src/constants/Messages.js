const MESSAGES = Object.freeze({
  CAR_NAME_INPUT:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  CAR_NAME_INPUT_ERROR_LENGTH:
    '[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.',
  CAR_NAME_INPUT_ERROR_BLANK:
    '[ERROR] 자동차 이름에 공백은 포함될 수 없습니다.',
  CAR_NAME_INPUT_ERROR_DUPLICATION: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  TOTAL_ROUND_INPUT: '시도할 횟수는 몇 회인가요?',
  TOTAL_ROUND_INPUT_ERROR_NATURAL_NUMBER:
    '[ERROR] 시도 횟수는 1이상의 자연수만 입력 가능합니다.',
  TOTAL_ROUND_INPUT_ERROR_BLANK:
    '[ERROR] 시도 횟수에 공백은 포함될 수 없습니다.',
  RESULT: '실행 결과',
  ADVANCE: '-',
  WINNER: '최종 우승자: ',
});

export default MESSAGES;
