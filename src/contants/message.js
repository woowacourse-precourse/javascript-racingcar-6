export const MESSAGE = {
  //   start: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`,
  //   winner: `최종 우승자 `,
  //   setTry: `시도할 횟수 `,
  //   times: `시도할 횟수는 몇 회인가요?`,
  //   error: `[ERROR] 입력이 올바른 형식이 아닙니다.`,

  input: {
    carName: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    numberOfTry: "시도할 횟수는 몇 회인가요?\n",
  },
  error: {
    carName:
      "[ERROR] 1글자 이상, 5글자 이하의 이름을 쉼표(,)를 기준으로 구분하여 입력하세요.",
    numberOfTimes: "[ERROR] 1 이상의 숫자를 입력하세요.",
    duplicateName: "[ERROR] 중복된 이름이 있습니다.",
  },
  result: {
    winner: "최종 우승자 : ",
    execution: "\n 실행 결과",
    distance: "-",
  },
};
