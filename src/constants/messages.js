const INPUT_MESSAGE = Object.freeze({
  run: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  attemps: '시도할 횟수는 몇 회인가요?',
});

const ERROR_MESSAGE = Object.freeze({
  carName: '[ERROR] 자동차 이름이 올바르지 않습니다.',
  duplicatedCarName: '[ERROR] 자동차 이름이 중복되지 않게 입력해주세요.',
  attemps: '[ERROR] 숫자만 입력해주세요.',
});

const OUTPUT_MESSAGE = Object.freeze({
  winner: '최종 우승자 : ',
});

export { INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE };
