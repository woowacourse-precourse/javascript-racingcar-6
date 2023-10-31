export const INPUT_MESSAGES = Object.freeze({
  carName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  gameCount: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  result: '실행 결과',
  winner: '최종 우승자',
});

export const ERRORS = Object.freeze({
  null: '[ERROR] 입력된 값이 없습니다.',
  carName: {
    black: '[ERROR] 입력에 공백이 포함되어 있습니다.',
    duplicate: '[ERROR] 입력에 중복된 값이 있습니다',
    length: '[ERROR] 입력이 5자 이하가 아닙니다.',
  },
  gameCount: {
    type: '[ERROR] 입력이 숫자가 아닙니다.',
    range: '[ERROR] 입력이 자연수가 아닙니다.',
  },
});

export const COUNT_REGEX = /^[1-9]\d*$/;

export const SPLIT_LETTER = ',';
export const RESULT_LETTER = '-';
