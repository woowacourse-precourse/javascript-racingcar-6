import { Console, MissionUtils } from "@woowacourse/mission-utils";
export default class View {
  async input(Question) {
    const inputString = await Console.readLineAsync(Question);
    return inputString;
  }
  print(message) {
    Console.print(message);
  }
  makeRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
  printProgress(score) {
    let progressString = "";
    for (let i = 0; i < score; i++) {
      progressString += "-";
    }
    return progressString;
  }
  printCaseResult(players) {
    this.print("게임 결과");
    players.map((player) => {
      let progress = this.printProgress(player.score);
      this.print(`${player.name} : ${progress}`);
    });
  }
  printResult(winners) {
    this.print(
      `최종 우승자 : ${winners.map((winner) => winner.name).join(", ")}`
    );
  }
}
