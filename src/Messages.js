const Messages = Object.freeze({
  INPUT_CARS: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_CNTS: '시도할 횟수는 몇회인가요?\n',
  MSG_RESULT: '\n실행 결과',
  MSG_WINNER: '최종 우승자: ',
  ERROR_CARS: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  ERROR_CNTS_EMPTY: '[ERROR] 입력값이 없습니다.',
  ERROR_CNTS_TYPE: '[ERROR] 시도 횟수는 정수만 가능합니다.',
  ERROR_CNTS_RANGE: '[ERROR] 시도 횟수는 양의 정수만 가능합니다.',
  ERROR_CNTS_NAN: '[ERROR] 시도 횟수는 숫자만 가능합니다.',
});

export default Messages;
