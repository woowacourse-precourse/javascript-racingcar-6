export const CAR_NAME_LENGTH_ERROR = () => {
  throw new Error("[ERROR] 자동차의 이름은 5자 이하만 가능합니다.");
};

export const CAR_NAME_DUPLICATE_ERROR = () => {
  throw new Error("[ERROR] 중복된 자동차명이 존재합니다.");
};

export const LOOP_NUMBER_TYPE_ERROR = () => {
  throw new Error("[ERROR] 반복 횟수는 숫자 형식으로 입력되어야 합니다.");
};
