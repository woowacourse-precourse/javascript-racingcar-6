const MESSAGE = Object.freeze({
  GET_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  GET_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '\n실행 결과',
  NEW_LINE: '',
  DISPLAY_CURRENT_PROGRESS: (car) => {
    return `${car.getName()} : ${'-'.repeat(car.getStep())}`;
  },
  WINNER_ANNOUNCEMENT: (winnerNames) => {
    return `최종 우승자: ${winnerNames}`;
  },
});

export default MESSAGE;
