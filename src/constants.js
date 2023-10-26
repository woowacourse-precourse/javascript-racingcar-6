const INPUT_MESSAGE = Object.freeze({
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
});

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH: '[ERROR] 이름은 5자 이하만 가능합니다.',
});

const CONDITION = Object.freeze({
  NAME_LENGTH: (name) => name.length > 5,
});

export { INPUT_MESSAGE, ERROR_MESSAGE, CONDITION };
