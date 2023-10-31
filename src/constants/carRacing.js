export const CAR_NAMES = Object.freeze({
  MIN_LENGTH: 1,
  MAX_LENGTH: 5,
});

export const CARS = Object.freeze({
  MIN_NUMBER_OF_CARS: 2,
});

export const RACING = Object.freeze({
  // 시도할 횟수 범위
  MIN_NUMBER_OF_ATTEMPTS: 1,
  MAX_NUMBER_OF_ATTEMPTS: 1000,

  // 랜덤으로 생성할 숫자의 범위
  MIN_NUMBER_OF_RANDOM_RANGE: 0,
  MAX_NUMBER_OF_RANDOM_RANGE: 9,

  // 전진하기 위한 숫자의 최소값
  MIN_NUMBER_TO_MOVE_FORWARD: 4,

  // 게임 실행 결과를 출력할 때 사용할 1회 전진 표시
  ONE_STEP_FORWARD_PROGRESS: "-",
});
