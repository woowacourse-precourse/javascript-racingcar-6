export const PRINT = {
  MESSAGE: {
    INPUT_CARS:
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    INPUT_NUMBER: "시도할 횟수는 몇 회인가요?\n",
    /**
     * 최종 우승자 출력
     * @param {String} winner
     * @returns string
     */
    WINNER: (winner) => `최종 우승자 : ${winner}`,
    /**
     * 움직인 실행 결과를 출력
     * @param {string} car
     * @param {Number} distance
     * @returns
     */
    EXECUTION_RESULT: (car, distance) => `${car} : ${"-".repeat(distance)}`,
  },
  ERROR: {
    INPUT: `[ERROR] 잘못된 입력입니다.`,
    UNEXPECTED: `[ERROR] 예상하지 못한 에러가 발생했습니다.`,
  },
};

export const SET_MOVE_CONDITION = 4;
export const SET_MAXIMUM_CAR_LENGTH = 4;
