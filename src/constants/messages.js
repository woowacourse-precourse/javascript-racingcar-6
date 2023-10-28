const GUIDE_MESSAGES = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  laps: '시도할 횟수는 몇 회인가요?\n',
  result: '\n실행 결과',
  whiteSpace: '',
  dash: '-',
  lapScore: (carName, score) => `${carName} : ${score}`,
});

const ERROR_MESSAGES = Object.freeze({
  exceedName: '[ERROR] 자동차 이름은 5자 이하로 입력해주세요.',
  emptyName: '[ERROR] 자동차 이름을 입력해주세요.',
  duplicatedName: '[ERROR] 중복되지 않은 고유한 자동차 이름을 입력해주세요.',
  positive: '[ERROR] 1 이상의 숫자를 입력해주세요.',
  integer: '[ERROR] 숫자만 입력 가능합니다.',
  specialChar: '[ERROR] 특수문자는 사용하실 수 없습니다.',
  whiteSpace: '[ERROR] 입력에 공백은 포함할 수 없습니다.',
});

export { GUIDE_MESSAGES, ERROR_MESSAGES };
