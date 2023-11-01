import { Console } from '@woowacourse/mission-utils';

// 예외사항 모듈
import RaceStatus from '../exception/RaceStatus';

// 상수 모듈
import { COMMENT, NUMBER } from '../utils/Constants';

class RaceOrganizer {
  static getCandidates(participant) {
    const strongCandidate = [...participant].sort(
      (a, b) => b[NUMBER.ONE].length - a[NUMBER.ONE].length,
    );

    const maxLap = strongCandidate[NUMBER.ZERO][NUMBER.ONE];
    RaceStatus.reportTrackIssue(maxLap);

    const winner = strongCandidate.flatMap(([name, lap]) =>
      maxLap === lap ? name : [],
    );

    return winner;
  }

  static talkToCarMovingForward(name, lap) {
    if (lap.length > NUMBER.ZERO) {
      Console.print(`${name} : ${lap}`);
      return;
    }
    Console.print(`${name} :`);
  }

  static talkToWinner(participant) {
    const winner = RaceOrganizer.getCandidates(participant).join(', ');

    Console.print(`${COMMENT.FINAL_WINNER} : ${winner}`);
  }
}

export default RaceOrganizer;
