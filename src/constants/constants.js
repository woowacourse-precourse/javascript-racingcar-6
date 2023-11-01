const MESSAGE = Object.freeze({
  input: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n',
  repeatTime: '시도할 회수는 몇회인가요?\n',
  winner: '최종우승자 : ',
});

const ERROR = Object.freeze({
  space: '[ERROR] : 이름에 공백이 있습니다.',
  specialChar: '[ERROR] : 이름에 특수문자가 있습니다.',
  empty: '[ERROR] : 빈 이름이 있습니다.',
  duplicate: '[ERROR] : 중복된 이름이 있습니다.',
  moreThanFiveLetters: '[ERROR] : 이름이 다섯 글자를 초과합니다.',
});

export { MESSAGE, ERROR };
