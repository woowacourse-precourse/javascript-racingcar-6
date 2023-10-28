import { Console } from "@woowacourse/mission-utils";

class RaceOrganizer {
  getCandidates(participant) {
    const strongCandidate = [...participant].sort(
      (a, b) => b[1].length - a[1].length,
    );

    const maxLap = strongCandidate[0][1].length;
    const winner = strongCandidate.flatMap(([name, lap]) =>
      maxLap === lap ? name : [],
    );

    return winner;
  }

  static talkToCarMovingForward(name, lap) {
    if (lap.length) {
      Console.print(`${name} : ${lap}`);
      return;
    }
    Console.print(`${name} :`);
  }

  static talkToWinner(participant) {
    const winner = this.getCandidates(participant).join(", ");

    Console.print(`${winner}`);
  }
}

export default RaceOrganizer;
