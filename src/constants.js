export const MESSAGES = {
  inputCarsName:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  inputRound: '시도할 횟수는 몇 회인가요?\n',
  printResult: '\n실행 결과',
  printWinner: '최종 우승자 : ',
};

export const ERROR_MESSAGES = {
  tooLongTextName: '[ERROR] 입력된 이름이 5자 이상입니다.',
  sameName: '[ERROR] 동일한 이름이 입력되었습니다.',
  notNumber: '[ERROR} 입력이 숫자가 아닙니다.',
  twoOrMore: '쉼표로 구분되어 자동차명을 두대이상 작성해주세요.',
  oneOrMore: '횟수는 1이상 이여야합니다.',
  positiveInteger: '양의 정수여야합니다.',
};
