const GUIDE_MESSAGE = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
});

const ERROR_MESSAGE = Object.freeze({
  tooLongName: '[ERROR] 자동차 이름은 5자 이하로 입력해주세요.',
  emptyName: '[ERROR] 자동차 이름을 입력해주세요.',
  duplicationName: '[ERROR] 중복된 자동차 이름이 있습니다.',
});

export { GUIDE_MESSAGE, ERROR_MESSAGE };
