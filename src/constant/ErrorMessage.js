const ERROR_MESSAGE = {
  INSUFFICIENT_CARS: '[ERROR] 경주할 자동차를 2대 이상 등록해주세요',
  CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하여야 합니다',
  NON_POSITIVE_PLAYCOUNT: '[ERROR] 시도할 횟수는 1회 이상이어야 합니다',
  NON_NUMERIC_PLAYCOUNT: '[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다',
};

export default Object.freeze(ERROR_MESSAGE);
