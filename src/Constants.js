const message = {
  ERROR: {
    nameBlankError: '[ERROR] 공백이 포함되지 않은 이름을 입력해주세요.',
    nameLengthError: '[ERROR] 이름은 5자 이하만 가능합니다.',
    nameDuplicateError: '[ERROR] 중복된 이름은 사용할 수 없습니다.',
    tryCountNumericError: '[ERROR] 시도횟수는 숫자로 입력해주세요.',
  },
  REQUEST_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  REQUEST_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  RESULT_HEADER: '실행 결과',
  WINNER_DELIMITER: ', ',
  WINNER_HEADER: '최종 우승자 : ',
  POSITION_UNIT: '-',
  EMPTY_LINE: '',
  BLANK: ' ',
}

export default message;