const INPUT_MESSAGE = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  attempt: '시도할 횟수는 몇 회인가요?\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  outputMessage: '\n실행 결과',
  winner: `\n최종 우승자 : `,
  enter: `\n`,
});

const ERROR_MESSAGE = Object.freeze({
  lengthError: '[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.',
  stringError: '[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.',
  duplicationError: '[ERROR] 중복되는 이름은 입력할 수 없습니다.',
  numberError: '[ERROR] 숫자만 입력 가능합니다.',
});

const REGEXP = Object.freeze({
  attemptRegex: /^[0-9]+$/,
  lengthRegex: /^.{1,5}$/,
  nameRegex: /^[A-Za-z]*$/,
});

const SYMBOL = Object.freeze({
  comma: ',',
  hyphen: '-',
  empty: '',
});

const MAGIC_NUMBER = Object.freeze({
  randomStart: 0,
  randomEnd: 9,
  moveNumber: 4,
});

export { 
  INPUT_MESSAGE, 
  OUTPUT_MESSAGE, 
  ERROR_MESSAGE, 
  REGEXP, 
  SYMBOL, 
  MAGIC_NUMBER 
};
