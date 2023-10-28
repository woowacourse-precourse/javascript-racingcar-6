const MESSAGE = {
  input: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n',
  repeat: '시도할 회수는 몇회인가요?\n',
  winner: '최종우승자 : ',
};

const ERROR = {
  space: '[ERROR] : space',
  specialChar: '[ERROR] : specialChar',
  empty: '[ERROR] : empty',
  duplicate: '[ERROR] : duplicate',
  moreThanFiveLetters: '[ERROR] : moreThanFiveLetters',
};

export { MESSAGE, ERROR };
