import { Console } from "@woowacourse/mission-utils";

class RaceOrganizer {
  static getCandidates(participant) {
    const strongCandidate = [...participant].sort(
      (a, b) => b[1].length - a[1].length,
    );

    const maxLap = strongCandidate[0][1];
    const winner = strongCandidate.flatMap(([name, lap]) =>
      maxLap === lap ? name : [],
    );

    return winner;
  }

  static talkToCarMovingForward(name, lap) {
    if (lap.length > 0) {
      Console.print(`${name} : ${lap}`);
      return;
    }
    Console.print(`${name} :`);
  }

  static talkToWinner(participant) {
    const winner = RaceOrganizer.getCandidates(participant).join(", ");

    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default RaceOrganizer;
