const ERROR_MESSAGE_GENERATOR = Object.freeze({
  overNumber(max) {
    return `${max}자 이하의 문자열을 입력해주세요!`;
  },
});

const ERROR_MESSAGE = Object.freeze({
  car: Object.freeze({
    moveArgNotInteger: 'move의 인자에 정수를 입력해주세요!',
  }),

  user: Object.freeze({
    blankName: 'User의 name에 공백이 아닌 값을 입력해주세요!',
    notStringName: 'User의 name에 문자열을 입력해주세요!',
    overMaxLengthName: `User의 name에 ${ERROR_MESSAGE_GENERATOR.overNumber(5)}`,
  }),
});

export default ERROR_MESSAGE;
