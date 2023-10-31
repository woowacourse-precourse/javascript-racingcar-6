const ERROR_MESSAGE_GENERATOR = Object.freeze({
  isOverMaxLength(target, max) {
    return `${target} ${max}자 이하의 문자열을 입력해주세요!`;
  },
  isUnderMaxLength(target, min) {
    return `${target} ${min}자 이상의 문자열을 입력해주세요!`;
  },
  isOverMaxNumber(target, max) {
    return `${target} ${max} 이하의 숫자를 입력해주세요!`;
  },
  isUnderMinNumber(target, min) {
    return `${target} ${min} 이상의 숫자를 입력해주세요!`;
  },
  isNotString(target) {
    return `${target}에 문자열을 입력해주세요!`;
  },
  isNotNumber(target) {
    return `${target}에 숫자를 입력해주세요!`;
  },
  isNotArray(target) {
    return `${target}에 배열을 입력해주세요!`;
  },
  isBlank(target) {
    return `${target}에 공백이 아닌 값을 입력해주세요!`;
  },
});

const ERROR_MESSAGE = Object.freeze({
  car: Object.freeze({
    isNotNumberMoveArg: ERROR_MESSAGE_GENERATOR.isNotNumber('move의 인자'),
  }),

  user: Object.freeze({
    isBlankName: ERROR_MESSAGE_GENERATOR.isBlank('User의 name'),
    isNotStringName: ERROR_MESSAGE_GENERATOR.isNotString('User의 name'),
    isOverMaxLengthName: ERROR_MESSAGE_GENERATOR.isOverMaxLength('User의 name', 5),
  }),

  track: Object.freeze({
    isNotArrayUsers: ERROR_MESSAGE_GENERATOR.isNotArray('Track의 users'),
    isExistNotUserInstance: 'Track의 users에 User 인스턴스가 아닌 값이 존재합니다!',
    isDuplicatedUserName: 'Track의 users에 중복된 name을 가진 User가 존재합니다!',

    isNotPositiveLap: ERROR_MESSAGE_GENERATOR.isUnderMinNumber('Track의 lap', 1),
    isNotNumberLap: ERROR_MESSAGE_GENERATOR.isNotNumber('Track의 lap'),
  }),
});

export default ERROR_MESSAGE;
