import { Console } from "@woowacourse/mission-utils";

class ResultManager {
  printOneRoundResults(round, racingCarMembers, isMovingForward) {
    for (let j = 0; j < racingCarMembers.length; j++) {
      const result = "-".repeat(this.countOneMemberResults(round, isMovingForward[j]));
      Console.print(`${racingCarMembers[j]} : ${result}`);
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

  selectFinalRound(roundNumber, racingCarMembers, isMovingForward) {
    const finalRoundResults = [];
    for (let i = 0; i < racingCarMembers.length; i++) {
      const result = this.countOneMemberResults(roundNumber, isMovingForward[i]);
      finalRoundResults.push(result);
    }
    return finalRoundResults;
  }
}

export default ResultManager;
