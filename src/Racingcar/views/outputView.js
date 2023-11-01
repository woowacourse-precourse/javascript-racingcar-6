import { MissionUtils } from "@woowacourse/mission-utils";

class Output {
  static printCurrentPositions(carData) {
    MissionUtils.Console.print("실행결과");
    carData.forEach((car) => {
      const positionIndicator = "-".repeat(car.position);
      MissionUtils.Console.print(`${car.name} : ${positionIndicator}`);
    });
  }

  static printWinners(winners) {
    const winnerMessage = `최종 우승자 : ${winners.join(", ")}`;
    MissionUtils.Console.print(winnerMessage);
  }
}

export default Output;
