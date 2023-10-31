import { Console } from "@woowacourse/mission-utils";

class ResultManager {
  printTotalRoundsResults(roundNumber, racingCarMembers, racingResults) {
    Console.print("\n실행 결과");
    for (let i = 0; i < roundNumber; i++) {
      this.printOneRoundResults(i, racingCarMembers, racingResults);
      Console.print("\n");
    }
  }

  printOneRoundResults(round, racingCarMembers, racingResults) {
    for (let i = 0; i < racingCarMembers.length; i++) {
      const result = "-".repeat(this.countOneMemberResults(round, racingResults[i]));
      Console.print(`${racingCarMembers[i]} : ${result}`);
    }
  }

  countOneMemberResults(round, memberResults) {
    let trueCount = 0;
    for (let i = 0; i <= round; i++) {
      if (memberResults[i] == true) {
        trueCount += 1;
      }
    }
    return trueCount;
  }

  printWinner(roundNumber, racingCarMembers, racingResults, winner) {
    const finalRoundResults = this.selectFinalRound(roundNumber, racingCarMembers, racingResults);

    const maxCount = Math.max(...finalRoundResults);

    finalRoundResults.forEach((result, index) => {
      if (result == maxCount) {
        winner.push(racingCarMembers[index]);
      }
    });
    Console.print(`최종 우승자 : ${winner.join()}`);
  }

  selectFinalRound(roundNumber, racingCarMembers, racingResults) {
    const finalRoundResults = [];
    for (let i = 0; i < racingCarMembers.length; i++) {
      const result = this.countOneMemberResults(roundNumber, racingResults[i]);
      finalRoundResults.push(result);
    }
    return finalRoundResults;
  }
}

export default ResultManager;
