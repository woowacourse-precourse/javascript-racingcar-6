export const MESSAGE = Object.freeze({
  nameInputGuide:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  countInputGuide: '시도할 횟수는 몇 회인가요?\n',
  winnerGuide: '최종 우승자 : ',
  resultGuide: '실행 결과',
});

export const ERROR_MESSAGE = Object.freeze({
  wrongGameCountInput:
    '[ERROR] 잘못된 형식의 숫자입니다. 횟수는 1 이상 70 이하여야 합니다.',
  wrongNameInput:
    '[ERROR] 둘 이상의 자동차 이름을 입력해주세요.(이름은 쉼표(,) 기준으로 구분)',
  duplicateNameInput: '[ERROR] 중복된 이름 입력이 있습니다.',
  wrongNameListLength: '[ERROR] 자동차 이름은 1000개까지 입력할 수 있습니다.',
});
