const message = Object.freeze({
  emptyString: '사용자의 입력이 없습니다.',
  invalidCarNameLength: '자동차 이름은 5자 이하만 가능합니다.',
});

const name = Object.freeze({
  inputView: 'inputViewError',
});

const errorCase = Object.freeze({
  emptyString: '',
});

const ERROR = Object.freeze({
  errorCase,
  message,
  name,
});

export default ERROR;
