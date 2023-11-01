export const MESSAGE = Object.freeze({
  START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT: "시도할 횟수는 몇 회인가요?",
  RESULT: "실행 결과",
  END: "최종 우승자 : ",
  getWinnersNames: (winnersNames) => `최종 우승자 : ${winnersNames.join(", ")}`,
});

const ERROR_PREFIX = "[ERROR]";
export const ERROR_MESSAGE = Object.freeze({
  DUPLICATED_NAME: `${ERROR_PREFIX} 이름이 중복 되었습니다`,
  EXCEEDED_LENGTH: `${ERROR_PREFIX} 이름은 5자리 이하만 가능합니다`,
  INVALID_NUMBER: `${ERROR_PREFIX} 숫자가 잘못된 형식입니다`,
});
