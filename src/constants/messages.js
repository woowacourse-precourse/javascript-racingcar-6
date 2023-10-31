export const CAR_NAME_PROMPT =
  "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
export const TRY_COUNT_PROMPT = "시도할 횟수는 몇 회인가요?\n";
export const EXECUTION_RESULT_PROMPT = "실행 결과\n";

export const FINAL_WINNER_SINGLE = (winnerName) =>
  `최종 우승자 : ${winnerName}`;

export const FINAL_WINNER_MULTIPLE = (winnerNames) =>
  `최종 우승자 : ${winnerNames}`;

export const CAR_NAME_ERROR = (carName) =>
  `[ERROR] 자동차 이름 "${carName}"은(는) 5자 이하여야 합니다.`;
