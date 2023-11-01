import RacingOutput from "./RacingOutput";

class RacingScore {
  constructor() {
    this.racingOutput = new RacingOutput();
  }

  randomScore(attemptNum, racingArr, scoreArr) {
    for (let i = 0; i < attemptNum; i++) {
      this.racingOutput.printScore(racingArr, scoreArr);
    }
    this.matchScoreCars(racingArr, scoreArr);
  }

  matchScoreCars(racingArr, scoreArr) {
    const maxScore = Math.max(...scoreArr);
    let maxIndex = scoreArr.indexOf(maxScore);
    const answer = [];

    while (maxIndex != -1) {
      answer.push(racingArr[maxIndex]);
      maxIndex = scoreArr.indexOf(maxScore, maxIndex + 1);
    }
    this.racingOutput.printAnswer(answer);
  }
}

export default RacingScore;
