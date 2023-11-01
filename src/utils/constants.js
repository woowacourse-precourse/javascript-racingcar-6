export const GameMessages = {
  INPUT_CARS_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ",
  INPUT_RACE_COUNT: "시도할 횟수는 몇 회인가요? ",
  EXECUTE_MESSAGE: "실행 결과",
  FINAL_WINNER: "최종 우승자 : "
};

export const ErrorMessages = {
  EMPTY_INPUT: "[ERROR] 값이 비어있습니다. 값을 입력해주세요.",
  CAR_NAME_LENGTH_EXCEEDED: "[ERROR] 자동차 이름은 1자 이상 5자 이하로 입력해주세요.",
  DUPLICATE_CAR_NAME: "[ERROR] 입력하신 자동차들 중에 중복되는 이름이 있습니다. 확인해주시고 다시 시도해주세요.",
  NEGATIVE_RACE_COUNT: "[ERROR] 입력값이 음수로 입력되었습니다. 양수로 입력해주세요.",
  INVALID_NUMBER_FORMAT: "[ERROR] 숫자가 잘못된 형식입니다. 숫자 형식으로 입력해주세요."
}

export const RANDOM_NUMBER_THRESHOLD = 4;

export const CAR_NAME_MIN_LEN= 1;
export const CAR_NAME_MAX_LEN = 5;

export const RACE_COUNT_CHECK_NEGATIVE = 0;