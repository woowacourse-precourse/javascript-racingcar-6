const INSUFFICIENT_CARS = '[ERROR] 경주할 자동차를 2대 이상 등록해주세요';
const CAR_NAME_LENGTH = '[ERROR] 자동차 이름은 5자 이하여야 합니다';
const NON_POSITIVE_PLAYCOUNT = '[ERROR] 시도할 횟수는 1회 이상이어야 합니다';
const NON_NUMERIC_PLAYCOUNT = '[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다';

const errorMessage = {
  INSUFFICIENT_CARS,
  CAR_NAME_LENGTH,
  NON_POSITIVE_PLAYCOUNT,
  NON_NUMERIC_PLAYCOUNT,
};
export default errorMessage;
