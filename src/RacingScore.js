import RacingOutput from "./RacingOutput";

class RacingScore {
  randomScore(attemptNum, racingArr, scoreArr) {
    const racingOutput = new RacingOutput();

    for (let i = 0; i < attemptNum; i++) {
      racingOutput.printScore(racingArr, scoreArr);
    }
  }
}

export default RacingScore;
