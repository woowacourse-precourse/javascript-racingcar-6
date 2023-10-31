import { Console } from "@woowacourse/mission-utils";

export const MESSAGE = Object.freeze({
  START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT: "시도할 횟수는 몇 회인가요?",
  RESULT: "실행 결과",
  END: "최종 우승자 : ",
  getGameScore: (moveCount) => {
    for (let car in moveCount) {
      Console.print(`${car} : ${moveCount[car]}`);
    }
    Console.print("");
  },
  getWinnersName: (winnerNames) => names.join(","),
});
