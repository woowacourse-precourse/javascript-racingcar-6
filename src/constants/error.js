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
  isNotInteger(target) {
    return `${target}에 정수를 입력해주세요!`;
  },
});

const DOMAIN_ERROR_PREFIX = Object.freeze({
  car: Object.freeze({
    moveArg: 'Car의 move의 인자',
  }),

  user: Object.freeze({
    name: 'User의 name',
  }),

  track: Object.freeze({
    user: 'Track의 name',
    lap: 'Track의 lap',
  }),
});

const ERROR_MESSAGE = Object.freeze({
  car: Object.freeze({
    isNotNumberMoveArg: ERROR_MESSAGE_GENERATOR.isNotNumber(DOMAIN_ERROR_PREFIX.car.moveArg),
  }),

  user: Object.freeze({
    isBlankName: ERROR_MESSAGE_GENERATOR.isBlank(DOMAIN_ERROR_PREFIX.user.name),
    isNotStringName: ERROR_MESSAGE_GENERATOR.isNotString(DOMAIN_ERROR_PREFIX.user.name),
    isOverMaxLengthName: ERROR_MESSAGE_GENERATOR.isOverMaxLength(DOMAIN_ERROR_PREFIX.user.name, 5),
  }),

  track: Object.freeze({
    isNotArrayUsers: ERROR_MESSAGE_GENERATOR.isNotArray(DOMAIN_ERROR_PREFIX.track.user),
    isExistNotUserInstance: `${DOMAIN_ERROR_PREFIX.track.user}에 User 인스턴스가 아닌 값이 존재합니다!`,
    isDuplicatedUserName: `${DOMAIN_ERROR_PREFIX.track.user}에 중복된 name을 가진 User가 존재합니다!`,

    isUnderMinLap: ERROR_MESSAGE_GENERATOR.isUnderMinNumber(DOMAIN_ERROR_PREFIX.track.lap, 1),
    isNotNumberLap: ERROR_MESSAGE_GENERATOR.isNotNumber(DOMAIN_ERROR_PREFIX.track.lap),
    isNotIntegerLap: ERROR_MESSAGE_GENERATOR.isNotInteger(DOMAIN_ERROR_PREFIX.track.lap),

    isEndedTrack: '이미 종료된 트랙입니다!',
  }),
});

export default ERROR_MESSAGE;
