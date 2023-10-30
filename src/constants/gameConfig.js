const SETTING = Object.freeze({
  min: 0,
  max: 9,
});

const MESSAGE = Object.freeze({
  game: {
    getName: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    AttemptsCount: "시도할 횟수는 몇 회인가요?",
    result: "실행 결과",
    winners: "최종 우승자 : ",
  },
  error: "[ERROR] 입력 형식이 잘못되었습니다.",
});

export { SETTING, MESSAGE };
