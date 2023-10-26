const GUIDE_MESSAGES = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
});

const ERROR_MESSAGES = Object.freeze({
  tooLongName: '[ERROR] 자동차 이름은 5자 이하로 입력해주세요.',
  emptyName: '[ERROR] 자동차 이름을 입력해주세요.',
  noSpecialChar: '[ERROR] 특수문자는 사용하실 수 없습니다.',
  noDuplicateName: '[ERROR] 중복되지 않은 고유한 자동차 이름을 입력해주세요.',
});

const rSpecialChar = /[!@#$%^&*()_+{}[\]<>.?~\\=]/g;

export { GUIDE_MESSAGES, ERROR_MESSAGES, rSpecialChar };
